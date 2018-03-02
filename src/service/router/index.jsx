import React from 'react'
import {
  Route,
  Redirect
} from 'react-router'

import Home from '../../pages/home'
import Msg from '../../pages/msg'
import Login from '../../pages/login'
import Theme from '../../pages/theme'

import List from '../../pages/home/list'
import Detail from '../../pages/home/detail'

export default () => [
    <Route key="default" path="/" render={() => <Redirect to="/home" />} exact />,
    <Route key="home" path="/home" component={Home} />,
    <Route key="msg" path="/msg" component={Msg} />,
    <Route key="theme" path="/theme" component={Theme} />,
    <Route key="login" path="/login" component={Login} />,
]

export const HomeRouter = (url) => {
  return [
    <Route key="homeDefault" path="/home" render={() => <Redirect to="/home/list" />} exact />,
    <Route key="list" path="/home/list" component={List} />,
    <Route key="detail" path="/home/detail" component={Detail} />,
  ]
}
