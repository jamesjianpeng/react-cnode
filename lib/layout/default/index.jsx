import React from 'react'
import Routes from '../../service/router'

import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'
import Hidden from 'material-ui/Hidden'
import Divider from 'material-ui/Divider'
import MenuIcon from 'material-ui-icons/Menu'
import MailFolderListItems from '../../components/left-aside-btn'
import Grid from 'material-ui/Grid'
import styles from '../../style/layout'

class LayoutDefault extends React.Component {

  constructor(props) {
    super(props)
    this.state = { mobileOpen: false }
  }

  handleDrawerToggle = () => {
   this.setState({ mobileOpen: !this.state.mobileOpen });
  }

  componentDidmount() {
    // do something....
  }

  render() {
    const { classes, theme } = this.props
    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <MailFolderListItems onClose={this.handleDrawerToggle} />
      </div>
    );

    return(
      // <Header key="header" />,
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar >
            <Grid container spacing={24}>
              <Grid item xs={4} sm={2}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={this.handleDrawerToggle}
                  className={classes.navIconHide}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                item xs={12} 
                sm={6}>
                <Typography variant="title" color="inherit" noWrap>
                  Responsive drawer
                </Typography>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
                item xs={8}
                sm={4}>
                <Button className={classes.button} color="inherit">Login</Button>
              </Grid>
            </Grid>

          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Routes />
        </main>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(LayoutDefault);
