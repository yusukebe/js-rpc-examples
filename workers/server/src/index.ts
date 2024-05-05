import type Calc from 'calc'
import { Hono } from 'hono'

type Env = {
  Bindings: {
    CALC: Calc
  }
}

const app = new Hono<Env>()

app.get('/', async (c) => {
  const result = await c.env.CALC.add(1, 2)
  return c.text(result.toString())
})

export default app
