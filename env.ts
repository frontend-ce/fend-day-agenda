import { z } from "zod";

const envSchema = z.object({
    VITE_SENTRY_DSN: z.string(),
    VITE_TRACE_PROPAGATION_TARGETS: z.array(z.string()),
    VITE_API_URL : z.string().min(1),
  });

export const env = envSchema.parse(process.env);