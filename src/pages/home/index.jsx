import React from 'react'
import { HomeRouter } from '../../service/router'
import API from '../../service/api/api'
import {
  Link
} from 'react-router-dom'

export default class Home extends React.Component {
  componentDidMount() {
    // do something...
    this.initData()
  }

  initData = async () => {
    try {
      let result = await API.getTopicList()
      console.log(result)
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    return [
      <Link key="list" to="/home/list">list</Link>,
      <Link key="detail" to="/home/detail">detail</Link>,
      <HomeRouter key="routes" />
    ]
  }
}
