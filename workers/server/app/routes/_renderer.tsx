import { jsxRenderer } from 'hono/jsx-renderer'
import { Script } from 'honox/server'

type Head = {
  title?: string
}

declare module 'hono' {
  interface ContextRenderer {
    (content: string | Promise<string>, head?: Head): Response | Promise<Response>
  }
}

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <Script src="/app/client.ts" async />
      </head>
      <body>
        <h1>
          <a href="/">JS RPC Examples</a>
        </h1>
        {children}
      </body>
    </html>
  )
})
