import React from 'react'

export default class TopicList extends React.Component {
  componentDidMount() {
    // do something...
  }

  render() {
    let list = []
    if (this.props.list) {
      list = this.props.list.map((item) => {
        return (
          <div key={item.id + '' + +new Date()}>
            <div>
              {item.author ? item.author.loginname : '暂无'}
            </div>
            <div>{item.title}</div>
          </div>
        )
      })
    }
    return (
      <div>
        {list}
      </div>
    )
  }
}
