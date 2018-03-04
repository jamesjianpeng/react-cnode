import React from 'react'
import handlerApiUrl from '../../service/api/types'

export default class Theme extends React.Component {
  componentDidMount() {
    // do something...
    handlerApiUrl()
  }

  render() {
    return (
      <span>theme page</span>
    )
  }
}
