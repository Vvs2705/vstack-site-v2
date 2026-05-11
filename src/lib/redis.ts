import { Redis } from '@upstash/redis'

let redisInstance: Redis | undefined

export const redis = new Proxy({} as Redis, {
  get: (_target, prop) => {
    if (!redisInstance) {
      redisInstance = new Redis({
        url:   process.env.UPSTASH_REDIS_REST_URL!,
        token: process.env.UPSTASH_REDIS_REST_TOKEN!,
      })
    }
    return Reflect.get(redisInstance, prop, redisInstance)
  },
})
