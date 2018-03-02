import React from 'react'
import Header from './header'
import Routes from '../../service/router'

export default class LayoutDefault extends React.Component {
  componentDidmount() {
    // do something....
  }

  render() {
    return [
      <Header key="header" />,
      <Routes key="routes" />,
    ]
  }
}
