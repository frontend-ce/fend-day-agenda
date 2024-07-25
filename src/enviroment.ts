import { z } from "zod";

const envSchema = z.object({
  VITE_SENTRY_DSN: z.string(),
  VITE_TRACE_PROPAGATION_TARGETS: z.array(z.string()),
  VITE_API_URL: z.string().min(1),
});

const env = envSchema.safeParse({
  VITE_SENTRY_DSN: import.meta.env.VITE_SENTRY_DSN,
  VITE_TRACE_PROPAGATION_TARGETS: (import.meta.env.VITE_TRACE_PROPAGATION_TARGETS || '').split(','),
  VITE_API_URL: import.meta.env.VITE_API_URL,
});

if (!env.success) {
  console.error(env.error.issues);
  throw new Error("There is an error with the server environment variables");
}

export const envClientSchema = env.data;