import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string(),

  MY_SERVICE_TOKEN: z.string(),
})

export const env = envSchema.parse(process.env)
