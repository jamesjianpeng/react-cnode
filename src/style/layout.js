const drawerWidth = 240

export default theme => {
  console.log(theme, theme.palette.primary.main)
  return {
    root: {
      flexGrow: 1,
      height: 430,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      width: '100%',
    },
    appBar: {
      position: 'absolute',
      flexGrow: 1,
      background: theme.palette.primary.main,
      marginLeft: drawerWidth,
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    button: {
      background: 'linear-gradient(45deg, #FE6B8B 40%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)'
    },
    navIconHide: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      background: theme.palette.primary.dark,
      [theme.breakpoints.up('md')]: {
        position: 'relative',
      },
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background['50'],
      padding: theme.spacing.unit * 3,
    },
  }
}
