import type { ErrorHandler } from 'hono'

const handler: ErrorHandler = async (e, c) => {
  console.log(e.message)
  c.status(500)
  return c.render(<p>Internal Server Error</p>)
}

export default handler
