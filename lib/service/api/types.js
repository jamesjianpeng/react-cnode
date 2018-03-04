import { _defineProperty } from '../utils'
/*
* types 主要是存放常量
*/

const T = 'topics'
const C = 'collect'

const apiUrl = {
  name: {
    T,
    C,
    T_C: `${T}_${C}`
  },
  methods: {
    GET: 'get',
    POST: 'post'
  }
}

_defineProperty(apiUrl)

export default apiUrl
