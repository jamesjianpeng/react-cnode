import axios from 'axios'
import env from '../env'

export class Server {
  axios () {
    let baseUrl = env.baseUrl
    console.log(baseUrl)
  }
}
