import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'
import $ from '../../factory'

const app = $.createApp()

app.get('/', async (c) => {
  using results = await c.env.BLOG.getPosts()
  return c.render(
    <div>
      <h2>Posts</h2>
      <p>
        <a href="/blog/create">/create</a>
      </p>
      {results.map((post) => {
        return (
          <article>
            <h3>{post.title}</h3>
            <div>{post.body}</div>
          </article>
        )
      })}
    </div>
  )
})

const schema = z.object({
  title: z.string(),
  body: z.string()
})

app.get('/create', (c) => {
  return c.render(
    <div>
      <h2>Create Post</h2>
      <form action="/blog" method="post">
        <input type="text" name="title" placeholder="Title" />
        <p>
          <textarea name="body"></textarea>
        </p>
        <button type="submit">Send</button>
      </form>
    </div>
  )
})

app.post('/', zValidator('form', schema), async (c) => {
  const { title, body } = c.req.valid('form')
  await c.env.BLOG.createPost({
    title,
    body
  })
  return c.redirect('/blog')
})

export default app
