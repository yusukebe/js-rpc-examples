import { WorkerEntrypoint } from 'cloudflare:workers'
import { drizzle } from 'drizzle-orm/d1'
import { posts } from './schema'

interface Env {
  DB: D1Database
}

export default class Blog extends WorkerEntrypoint<Env> {
  async getPosts() {
    const db = drizzle(this.env.DB)
    return await db.select().from(posts).all()
  }
  async createPost({ title, body }: { title: string; body: string }) {
    const db = drizzle(this.env.DB)
    const uuid = crypto.randomUUID()
    return await db
      .insert(posts)
      .values({
        id: uuid,
        title,
        body
      })
      .returning()
  }
  fetch() {
    return new Response()
  }
}
