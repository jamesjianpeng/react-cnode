import React from 'react'
import { HomeRouter } from '../../service/router'
import {
  Link
} from 'react-router-dom'

export default class Home extends React.Component {
  componentDidMount() {
    // do something...
  }

  render() {
    return [
      <Link key="list" to="/home/list">list</Link>,
      <Link key="detail" to="/home/detail">detail</Link>,
      <HomeRouter key="routes" />
    ]
  }
}
