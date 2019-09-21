import React from 'react';
import clsx from 'clsx';

import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Dashboard, DesktopWindows, Work } from '@material-ui/icons';

// STYLES
import withNavBarStyles from './NavBar.style';

// const drawerWidth = 50;

function NavBar({ classes }) {
  const [open, setOpen] = React.useState(false);

  function handleDrawer() {
    open ? setOpen(false) : setOpen(true);
  }

  return (
    <div>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx({ [classes.drawer]: true, [classes.drawerOpen]: open, [classes.drawerClose]: !open })
        }}
      >
        <div>
          <List>
            <ListItem button onClick={handleDrawer}>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={handleDrawer}>
              <ListItemIcon>
                <DesktopWindows />
              </ListItemIcon>
              <ListItemText primary="Monitor" />
            </ListItem>
            <ListItem button>
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

export default withNavBarStyles(NavBar);
