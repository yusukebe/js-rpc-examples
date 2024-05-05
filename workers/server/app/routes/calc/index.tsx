import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'
import $ from '../../factory'
import Component from './_component.island'

const app = $.createApp()

app.get('/', async (c) => {
  return c.render(
    <div>
      <h2>Calculator</h2>
      <Component />
    </div>
  )
})

const schema = z.object({
  a: z.coerce.number(),
  b: z.coerce.number()
})

const routes = app.get('/api/add', zValidator('query', schema), async (c) => {
  const { a, b } = c.req.valid('query')
  const result = await c.env.CALC.add(a, b)
  return c.json({
    result
  })
})

export type ApiType = typeof routes

export default app
