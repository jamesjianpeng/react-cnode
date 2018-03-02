export default class Env {
  constructor ({env, baseUrl}) {
    this.env = env
    this.baseUrl = baseUrl
  }
  getEnv () {
    return {
      env: this..env,
      baseUrl: this.baseUrl
    }
  }
}
