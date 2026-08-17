type Bucket = { count: number; resetAt: number };

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

// Best-effort only: this Map lives in the memory of a single serverless
// function instance. On Vercel that instance is not guaranteed to survive
// between requests (cold starts) or to be the same instance that handles
// concurrent traffic, so this does not provide a hard, reliable limit across
// all requests - it mainly stops rapid repeated submits from the same warm
// instance. A real, persistent limit shared across all instances would need
// an external store (e.g. Upstash Redis) and was intentionally not added
// without asking first.
const buckets = new Map<string, Bucket>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  bucket.count += 1;
  return bucket.count > MAX_REQUESTS;
}
