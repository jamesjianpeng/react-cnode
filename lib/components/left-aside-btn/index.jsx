import React from 'react'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import InboxIcon from 'material-ui-icons/Inbox'
import DraftsIcon from 'material-ui-icons/Drafts'
import Divider from 'material-ui/Divider'
import { withRouter } from "react-router-dom"

class MailFolderListItems extends React.Component{
  // constructor(props) {
  //  super(props)
  // }

  clickItem (type, e) {
    // this.context.router.history.push(type)
    this.props.history.push(type)
    console.log(this.props)
    console.log(this.props.history)
    console.log(type)
    this.props.onClose()
  }

  render() {
    return (
      <List>
      <ListItem button onClick={this.clickItem.bind(this, '/home')}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="home" />
      </ListItem>
      <Divider />
      <ListItem button onClick={this.clickItem.bind(this, '/msg')}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="msg" />
      </ListItem>
      <Divider />
      <ListItem button onClick={this.clickItem.bind(this, '/theme')}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="new theme" />
      </ListItem>
      <Divider />
      </List>
    )
  }
}

export default withRouter(MailFolderListItems)
