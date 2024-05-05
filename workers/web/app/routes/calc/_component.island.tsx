import { hc } from 'hono/client'
import { useState, useEffect } from 'hono/jsx'
import type { ApiType } from '.'

const client = hc<ApiType>('/calc')

export default function Component() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [result, setResult] = useState(0)

  const fetchAdd = async () => {
    const res = await client.api.add.$get({
      query: {
        a: a.toString(),
        b: b.toString()
      }
    })
    const data = await res.json()
    setResult(data.result)
  }

  useEffect(() => {
    fetchAdd()
  }, [])

  return (
    <>
      <p>
        <b>{result}</b>
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          fetchAdd()
        }}
      >
        <input
          type="text"
          value={a}
          onChange={(e) => {
            if (e.currentTarget instanceof HTMLInputElement) {
              setA(Number(e.currentTarget.value))
            }
          }}
          placeholder="A"
        />
        <input
          type="text"
          value={b}
          onChange={(e) => {
            if (e.currentTarget instanceof HTMLInputElement) {
              setB(Number(e.currentTarget.value))
            }
          }}
          placeholder="B"
        />
        <button type="submit">Add</button>
      </form>
    </>
  )
}
