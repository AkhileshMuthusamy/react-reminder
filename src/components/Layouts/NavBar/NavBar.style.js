import { withStyles } from '@material-ui/core/styles';

const color = 'rgba(255, 255, 255, 0.7)';

/**
 * Overriding default style of particular drawer
 */
export default withStyles(theme => ({
  drawer: {
    background: '#19212b',
    '& *': {
      color
    }
  }
}));
