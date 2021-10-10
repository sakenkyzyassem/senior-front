import { Toolbar, Badge, Typography, IconButton, Popover, Button, Link, Menu, MenuItem, ListItemText } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  Person as UserIcon,
  Search as SearchIcon,
} from "@mui/icons-material";

// constants
import { APP_TITLE, DRAWER_WIDTH } from "../utils/constants";
import React, { useState } from "react";

// define interface to represent component props
interface HeaderProps {
  open: boolean;
  handleMenuToggle: () => void;
  toggleTheme?: () => void;
  useDefaultTheme?: boolean;
}

const Header = ({ open, handleMenuToggle, }: HeaderProps) => {
  const [profileAnchor, setprofileAnchor] = useState(null);

  const openProfilePopover = (event: any) => {
    setprofileAnchor(event.currentTarget);
  }

  return (
    <AppBar position="absolute" sx={{
      zIndex: (theme) => theme.zIndex.drawer + 1,
      transition: (theme) => theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(open && {
        marginLeft: DRAWER_WIDTH,
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        transition: (theme) => theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
    }}>
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleMenuToggle}
          sx={{ mr: 2,
            ...(open && { display: 'none' }), }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {APP_TITLE}
        </Typography>
        <IconButton 
          size="small"
          color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton 
          size="small"
          color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton 
          size="small" 
          color="inherit" 
          onClick={openProfilePopover}>
          <UserIcon />
        </IconButton>
        <Popover 
          open={Boolean(profileAnchor)}
          anchorEl={profileAnchor}
        > 
          <Menu
            id="menu-appbar"
            anchorEl={profileAnchor}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(profileAnchor)}
            onClose={() => {setprofileAnchor(null);}}
          >
            <MenuItem sx={{ width: '250px'}}>
              <ListItemText primary="Madi Nazarbayev"
              secondary={
                  <Link
                    href="/profile"
                    sx={{
                      fontSize: 12,
                      textDecoration: "none",
                      color: "grey",
                    }}>
                      My profile
                  </Link>
              }/>
            </MenuItem>
            <MenuItem>
              <Button color="primary">Log out</Button>
            </MenuItem>
          </Menu>
        </Popover>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
