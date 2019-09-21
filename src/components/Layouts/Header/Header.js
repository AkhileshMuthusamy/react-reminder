import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Menu, MenuOpen } from '@material-ui/icons';
import { ReactComponent as Logo } from '../../../theme/logo.svg';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    borderRadius: theme.spacing(3),
    borderWidth: theme.spacing(0.25)
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2)
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        {/* In order to remove padding in Toolbar disableGutters property is used. */}
        <Toolbar disableGutters={true}>
          <IconButton>
            <Menu />
          </IconButton>
          <Logo style={{ height: 40, width: 40 }} />
          {/* noWrap in Typography is used to prevent it from affecting grid size when spanned */}
          <Typography variant="h6" className={classes.title} noWrap>
            REACT SCHEDULER
          </Typography>
          <Button variant="contained" color="secondary" className={classes.menuButton}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
