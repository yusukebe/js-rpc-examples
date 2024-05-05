import type Blog from 'blog'
import type Calc from 'calc'
import { createFactory } from 'hono/factory'

export type Env = {
  Bindings: {
    CALC: Service<Calc>
    BLOG: Service<Blog>
  }
}

export default createFactory<Env>()
