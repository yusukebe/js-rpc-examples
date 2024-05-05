import { WorkerEntrypoint } from 'cloudflare:workers'

export default class Calc extends WorkerEntrypoint {
  async add(a: number, b: number) {
    console.log(`[Calc] add: ${a} + ${b}`)
    return a + b
  }
  fetch() {
    return new Response()
  }
}
