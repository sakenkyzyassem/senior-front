import { AppBar, Toolbar, Box, Typography, IconButton, Popover, Button, Link } from "@mui/material";
import { 
  Menu as MenuIcon, 
  Notifications as NotificationsIcon, 
  Person as UserIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import styled from 'styled-components';

// constants
import { APP_TITLE } from "../utils/constants";
import React, { useState } from "react";

// define css-in-js
const Title = styled.div`
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center`;
const ProfilePopoverUsernameContainer = styled.div`
      width: "250px",
      height: "60px",
      borderBottom: "1px solid #eee"`;

// define interface to represent component props
interface HeaderProps {
  open: boolean;
  handleMenuOpen: () => void;
  toggleTheme?: () => void;
  useDefaultTheme?: boolean;
}

const Header = ({
  open,
  handleMenuOpen,
}: HeaderProps) => {
  const [profileAnchor, setprofileAnchor] = useState(null);

  const openProfilePopover = (event: any) => {
    setprofileAnchor(event.currentTarget);
  }

  return (
    <AppBar
      position="fixed"
      sx={{zIndex: 'zIndex.drawer + 1'}}
    >
      <Toolbar sx={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}>
        <Title>
          <IconButton
            color="inherit"
            aria-label="open menu"
            onClick={handleMenuOpen}
            edge="start"
            sx={open ? { mr: 36 } : { mr: 36 }}
            size="small"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {APP_TITLE}
          </Typography>
        </Title>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton 
          size="small"
          color="inherit"
          sx={{ mr: 15, ml: 15}} >
          <SearchIcon />
        </IconButton>
        <IconButton 
          size="small"
          color="inherit"
          sx={{ mr: 15, ml: 15}} >
          <NotificationsIcon />
        </IconButton>
        <IconButton 
          size="small" 
          color="inherit"
          sx={{ mr: 15, ml: 15}} 
          onClick={openProfilePopover}>
          <UserIcon />
        </IconButton>
        <Popover 
          open={Boolean(profileAnchor)}
          anchorEl={profileAnchor}
          onClose={() => {
            setprofileAnchor(null);
          }}
          anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        > 
          <ProfilePopoverUsernameContainer>
            <Typography variant="caption"
              sx={{ ml: 10, mt: 10 }}>
                Madi Nazarbayev
            </Typography>
            <Link
              href="/profile"
              sx={{
                ml: 10,
                fontSize: 12,
                textDecoration: "none",
                color: "grey",
              }}>
                My profile
            </Link>
          </ProfilePopoverUsernameContainer>
          <div>
            <Button color="primary" sx={{ ml: 5 }}>Log out</Button>
          </div>
        </Popover>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
