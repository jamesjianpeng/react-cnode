import React from 'react'
import Links from '../../components/links'
import Button from 'material-ui/Button'

export default class Header extends React.Component {
  componentDidmount() {
    // do something....
  }

  render() {
    return (
      <div>
        <Button variant="raised" color="primary">
          Primary
        </Button>
        <Links />
      </div>
    )
  }
}
