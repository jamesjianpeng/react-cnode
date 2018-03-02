import React from 'react'
import {
  Link
} from 'react-router-dom'

export default class Links extends React.Component {
  render () {
    return [
      <Link key="home" to="/home">首页</Link>,
      <Link key="msg" to="/msg">未读消息</Link>,
      <Link key="login" to="/login">登录</Link>,
    ]
  }
}
