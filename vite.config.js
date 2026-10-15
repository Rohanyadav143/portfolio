import { defineConfig } from "vite";
import { loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { handler } from "./api/visits.js";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  for (const key of ["UPSTASH_REDIS_REST_URL", "UPSTASH_REDIS_REST_TOKEN"]) {
    if (!process.env[key] && env[key]) process.env[key] = env[key];
  }

  return {
    plugins: [
      react(),
      {
        name: "local-visitor-counter",
        configureServer(server) {
          server.middlewares.use("/api/visits", (request, response) => {
            handler(request, response);
          });
        },
      },
    ],
    base: "/",
  };
});
