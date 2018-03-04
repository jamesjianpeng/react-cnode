import axios from 'axios'
import env from '../env'
import apiConfig from './apiConfig'

export default class Server {
  axios(type, params){
    return new Promise((resolve, reject) => {
      if(typeof params !== 'object') params = {};
      let _option = params;
      _option = {
        method: apiConfig[type].methods,
        url: apiConfig[type].name,
        baseURL: env.getEnv().baseUrl,
        timeout: 30000,
        validateStatus:(status)=>{
            return status >= 200 && status < 300;
        },
        params,
      }
      axios.request(_option).then(res => {
        console.log(res, 'Server')
        resolve(typeof res.data === 'object' ? res.data : JSON.parse(res.data))
      },error => {
        if(error.response){
            reject(error.response.data)
        }else{
            reject(error)
        }
      })
    })
  }
}
