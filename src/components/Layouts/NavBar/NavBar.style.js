import { withStyles } from '@material-ui/core/styles';

const color = 'rgba(255, 255, 255, 0.7)';

const drawerWidth = 200;

/**
 * Overriding default style of particular drawer
 */
export default withStyles(theme => ({
  drawer: {
    background: '#19212b',
    '& *': {
      color
    }
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden',
    overflow: 'hidden'
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    overflow: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7)
    }
  }
}));
