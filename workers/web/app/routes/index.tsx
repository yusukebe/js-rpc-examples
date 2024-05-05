import $ from '../factory'

export default $.createHandlers(async (c) => {
  return c.render(
    <div>
      <ul>
        <li>
          <a href="/calc">/calc</a>
        </li>
        <li>
          <a href="/blog">/blog</a>
        </li>
      </ul>
    </div>
  )
})
