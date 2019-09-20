import React from 'react';

import { Drawer, Divider, IconButton } from '@material-ui/core';
import { Menu, Mail, Inbox, ChevronLeft } from '@material-ui/icons';

// STYLES
import withNavBarStyles from './NavBar.style';

// const drawerWidth = 50;

function NavBar({ classes }) {
  return (
    <div>
      <Drawer variant="permanent" classes={{ paper: classes.drawer }}>
        <div>
          <IconButton>
            <Menu />
          </IconButton>
          <Divider />
          <IconButton>
            <Mail />
          </IconButton>
        </div>
      </Drawer>
    </div>
  );
}

export default withNavBarStyles(NavBar);
