import React from 'react'

import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import styles from '../../style/layout'
import mailFolderListItems from '../../components/left-aside-btn'

class LeftAside extends React.Component {
  render() {
    const { classes, theme } = this.props

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        {mailFolderListItems}
        <Divider />
        {otherMailFolderListItems}
      </div>
    )

    return (
      <Drawer
        variant="temporary"
        anchor={this.props.anchor}
        open={this.props.open}
        onClose={this.props.onLeftAsideToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
    )
  }
}

export default withStyles(styles, { withTheme: true })(LeftAside);
