import { Redis } from '@upstash/redis'

import { env } from 'lib/environment'

const redis = new Redis({
  url: env.NEXT_PUBLIC_UPSTASH_REDIS_REST_URL,
  token: env.NEXT_PUBLIC_UPSTASH_REDIS_REST_TOKEN,
})

export default redis
