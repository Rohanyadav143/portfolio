import { createHash } from "node:crypto";

const VISIT_SCRIPT = `
local current = tonumber(redis.call("GET", KEYS[3]) or "0")
if redis.call("GET", KEYS[1]) then
  return {current, 0}
end
local requests = redis.call("INCR", KEYS[2])
if requests == 1 then redis.call("EXPIRE", KEYS[2], 86400) end
if requests > 100 then return {-1, 0} end
redis.call("SET", KEYS[1], "1", "EX", 2592000)
current = redis.call("INCR", KEYS[3])
return {current, 1}
`;

class VisitorCounterConfigurationError extends Error {
  constructor() {
    super("Visitor counter credentials are not configured.");
    this.name = "VisitorCounterConfigurationError";
  }
}

function logCounterFailure(action, error) {
  if (error instanceof VisitorCounterConfigurationError) return;
  console.error(`[visitor-counter] Unable to ${action}:`, error);
}

function send(response, status, body) {
  if (typeof response.status === "function") {
    return response.status(status).json(body);
  }
  response.statusCode = status;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.end(JSON.stringify(body));
}

async function readBody(request) {
  if (request.body && typeof request.body === "object") return request.body;
  if (typeof request.body === "string") return JSON.parse(request.body);

  let raw = "";
  for await (const chunk of request) {
    raw += chunk;
    if (raw.length > 1024) throw new Error("Request body is too large.");
  }
  return JSON.parse(raw);
}

async function redisCommand(command) {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL?.trim();
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();
  if (!redisUrl || !redisToken) {
    throw new VisitorCounterConfigurationError();
  }

  const parsedUrl = new URL(redisUrl);
  if (parsedUrl.protocol !== "https:") {
    throw new Error("The visitor counter requires a secure Redis endpoint.");
  }

  const response = await fetch(parsedUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${redisToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
  });
  const result = await response.json();
  if (!response.ok || result.error) {
    throw new Error("The visitor counter storage request failed.");
  }
  return result.result;
}

export async function handler(request, response) {
  if (request.method === "GET") {
    try {
      const result = await redisCommand(["GET", "portfolio:visits"]);
      const count = result === null ? 0 : Number(result);
      if (!Number.isSafeInteger(count) || count < 0) {
        throw new Error("The stored visitor count is invalid.");
      }
      return send(response, 200, { count });
    } catch (error) {
      logCounterFailure("read visit count", error);
      return send(response, 503, { error: "The portfolio visit counter is unavailable." });
    }
  }

  if (request.method !== "POST") {
    response.setHeader?.("Allow", "GET, POST");
    return send(response, 405, { error: "Method not allowed." });
  }

  if (!/^application\/json(?:\s*;|$)/i.test(request.headers["content-type"] || "")) {
    return send(response, 415, { error: "Content-Type must be application/json." });
  }

  try {
    const body = await readBody(request);
    const sessionId = body?.sessionId;
    if (typeof sessionId !== "string" || !/^[\da-f-]{36}$/i.test(sessionId)) {
      return send(response, 400, { error: "A valid visit session ID is required." });
    }

    const forwardedFor = request.headers["x-forwarded-for"];
    const ip = typeof forwardedFor === "string"
      ? forwardedFor.split(",")[0].trim()
      : "unknown";
    const ipHash = createHash("sha256").update(ip || "unknown").digest("hex");
    const result = await redisCommand([
      "EVAL",
      VISIT_SCRIPT,
      "3",
      `portfolio:session:${sessionId}`,
      `portfolio:rate:${ipHash}`,
      "portfolio:visits",
    ]);

    const count = Number(result?.[0]);
    if (count === -1) {
      return send(response, 429, { error: "The visit counter rate limit was reached. Please try again later." });
    }
    if (!Number.isSafeInteger(count) || count < 0) {
      throw new Error("The visitor counter returned an invalid count.");
    }
    return send(response, 200, { count });
  } catch (error) {
    logCounterFailure("record visit", error);
    return send(response, 503, { error: "The portfolio visit counter is unavailable." });
  }
}

export default handler;
