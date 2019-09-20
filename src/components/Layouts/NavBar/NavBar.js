import React from 'react';

import { Drawer, Divider, IconButton } from '@material-ui/core';
import { Dashboard, DesktopWindows, Work } from '@material-ui/icons';

// STYLES
import withNavBarStyles from './NavBar.style';

// const drawerWidth = 50;

function NavBar({ classes }) {
  return (
    <div>
      <Drawer variant="permanent" classes={{ paper: classes.drawer }}>
        <div>
          <IconButton>
            <Dashboard />
          </IconButton>
          <Divider />
          <IconButton>
            <DesktopWindows />
          </IconButton>
          <Divider />
          <IconButton>
            <Work />
          </IconButton>
        </div>
      </Drawer>
    </div>
  );
}

export default withNavBarStyles(NavBar);
