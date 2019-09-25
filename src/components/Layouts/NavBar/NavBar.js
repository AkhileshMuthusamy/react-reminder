import React from 'react';
import clsx from 'clsx';
import { withRouter } from 'react-router-dom';

import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Dashboard, DesktopWindows, Work } from '@material-ui/icons';

import { connect } from 'react-redux';

// STYLES
import withNavBarStyles from './NavBar.style';

function NavBar({ classes, history, isOpen }) {
  console.dir(isOpen);

  return (
    <div>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx({ [classes.drawer]: true, [classes.drawerOpen]: isOpen, [classes.drawerClose]: !isOpen })
        }}
      >
        <div>
          <List>
            <ListItem
              button
              onClick={() => {
                history.push('/dashboard');
              }}
            >
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                history.push('/monitor');
              }}
            >
              <ListItemIcon>
                <DesktopWindows />
              </ListItemIcon>
              <ListItemText primary="Monitor" />
            </ListItem>
            <ListItem button onClick={() => history.push('/tasks')}>
              <ListItemIcon>
                <Work />
              </ListItemIcon>
              <ListItemText primary="Task" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}

const mapStateToProps = state => ({
  isOpen: state.isOpen
});

export default connect(mapStateToProps)(withRouter(withNavBarStyles(NavBar)));
