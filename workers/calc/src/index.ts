import { WorkerEntrypoint } from 'cloudflare:workers'

export default class Calc extends WorkerEntrypoint {
  async add(a: number, b: number) {
    return a + b
  }
  fetch() {
    return new Response()
  }
}
