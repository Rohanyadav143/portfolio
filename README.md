# Rohan Yadav — Portfolio

Personal portfolio built with React, Vite, React Router, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Run `npm run lint` for ESLint and `npm run build` to create the production site in `dist/`.

The contact form uses EmailJS. Configure `VITE_EMAILJS_SERVICE_ID`,
`VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` in a local `.env.local`
file and in the deployment environment. The public key is intended for browser use;
do not put private credentials in `VITE_` variables.

## Persistent portfolio visit counter

The counter stores its total in Upstash Redis and is incremented by the
`/api/visits` serverless function. It records one visit per browser tab session:
the client keeps a random session ID in `sessionStorage`, and the Redis operation
deduplicates that ID for 30 days. Reloads and React Strict Mode remounts do not
increment the total again. The API also rate-limits each hashed source IP to 100
new visits per day; raw IP addresses are not stored.

This endpoint is intended for Vercel deployment. To enable it:

1. Create an Upstash Redis database and copy its REST URL and REST token.
2. Add `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` to the Vercel
   project's environment variables for each environment where the counter should
   run. These values are server-side only; do not prefix them with `VITE_`.
3. Deploy the Vite app to Vercel. Vercel serves `api/visits.js` as the
   `/api/visits` function alongside the static build.
4. For local counter testing, put the same two variables in the ignored
   `.env.local` file and run `npm run dev`. The Vite dev-server middleware
   forwards `/api/visits` to the same handler.

Without the Upstash variables, the portfolio displays an explicit unavailable
state instead of inventing a count. The first recorded visit initializes the
counter at one. A `GET /api/visits` request reads the stored total without
incrementing it.

The backend allows same-origin requests and validates the session ID and JSON
content type. Its increment and idempotency check are atomic in Redis. The
public counter endpoint is not intended to represent unique people; it reports
counted tab sessions.
