/*
* object 主要设置 是否可删 是否可以枚举 是否可写 本身的值
*/
const _definePropertyInner = ({obj, key, value}) => {
  Object.defineProperty(obj, key, {
    configurable: false,
    enumerable: false,
    writable: false,
    value
  })
}

export const _defineProperty = (obj) => {
  Reflect.ownKeys(obj).forEach((key) => {
    let value = obj[key]
    if (typeof value === 'object') {
      _definePropertyInner({obj, key, value})
      _defineProperty(value)
    } else {
      _definePropertyInner({obj, key, value})
    }
  })
}
