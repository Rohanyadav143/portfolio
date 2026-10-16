import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";

const visitStorageKey = "portfolio-visit-session";
const countStorageKey = "portfolio-visit-count";
let fallbackSessionId;
const requestsBySession = new Map();

function getSessionId() {
  try {
    let id = window.sessionStorage.getItem(visitStorageKey);
    if (!id) {
      id = window.crypto.randomUUID();
      window.sessionStorage.setItem(visitStorageKey, id);
    }
    return id;
  } catch {
    fallbackSessionId ||= window.crypto.randomUUID();
    return fallbackSessionId;
  }
}

function getCachedCount() {
  try {
    const cached = window.sessionStorage.getItem(countStorageKey);
    if (!cached) return null;

    const count = Number(cached);
    return Number.isSafeInteger(count) && count >= 0 ? count : null;
  } catch {
    return null;
  }
}

export default function VisitorCount() {
  const [initialCount] = useState(getCachedCount);
  const [count, setCount] = useState(initialCount);
  const [displayCount, setDisplayCount] = useState(initialCount ?? 0);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    const sessionId = getSessionId();
    let request = requestsBySession.get(sessionId);
    if (!request) {
      request = fetch("/api/visits", {
        method: initialCount === null ? "POST" : "GET",
        ...(initialCount === null && {
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId }),
        }),
      })
        .then(async (response) => {
          const data = await response.json();
          if (!response.ok || !Number.isSafeInteger(data.count) || data.count < 0) {
            throw new Error(data.error || "The portfolio visit counter is unavailable.");
          }
          try {
            window.sessionStorage.setItem(countStorageKey, String(data.count));
          } catch {
            // Session storage can be disabled; the server still deduplicates the visit.
          }
          return data.count;
        })
        .finally(() => requestsBySession.delete(sessionId));
      requestsBySession.set(sessionId, request);
    }

    request.then(
      (nextCount) => {
        if (active) setCount(nextCount);
      },
      (reason) => {
        if (active) setError(reason instanceof Error ? reason.message : "The portfolio visit counter is unavailable.");
      },
    );

    return () => {
      active = false;
    };
  }, [initialCount]);

  useEffect(() => {
    if (count === null) return undefined;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      const frame = requestAnimationFrame(() => setDisplayCount(count));
      return () => cancelAnimationFrame(frame);
    }

    let frame = 0;
    const start = performance.now();
    const duration = 850;
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayCount(Math.round(count * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [count]);

  return (
    <span className="visitor-count" role="status" aria-live="polite" title={error || undefined}>
      <FaEye aria-hidden="true" />
      <span className="visitor-count-label">Portfolio Visits</span>
      <span className="visitor-count-separator" aria-hidden="true">&middot;</span>
      <span className="visitor-count-value">
        {count === null ? (error ? "Unavailable" : "Loading") : displayCount.toLocaleString()}
      </span>
    </span>
  );
}
