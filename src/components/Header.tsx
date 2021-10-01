import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  //Tooltip,
  createStyles,
  makeStyles,
  Theme,
  Popover,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import UserIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";

// constants
import { APP_TITLE, DRAWER_WIDTH } from "../utils/constants";
import React, { useState } from "react";

// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    appBarShift: {
      marginLeft: DRAWER_WIDTH,
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
    },
    toolbar: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    title: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    headerButton: {
      marginRight: 15,
      marginLeft: 15,
    },
    profilePopoverUsernameContainer: {
      width: "250px",
      height: "60px",
      borderBottom: "1px solid #eee",
    },
    profilePopoverUsername: {
      marginLeft: 10,
      marginTop: 10,
      fontSize: 20,
    },
    profilePopoverLink: {
      marginLeft: 10,
      fontSize: 12,
      textDecoration: "none",
      color: "grey",
    },
    logoutButton: {
      marginLeft: 5,
      color: "#5600E8",
    }
  })
);

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
  const classes = useStyles();
  const [profileAnchor, setprofileAnchor] = useState(null);

  const openProfilePopover = (event: any) => {
    setprofileAnchor(event.currentTarget);
  }

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
          <IconButton
            color="inherit"
            aria-label="open menu"
            onClick={handleMenuOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
            size="small"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {APP_TITLE}
          </Typography>
        </div>
        <IconButton 
          size="small"
          color="inherit"
          className={classes.headerButton}>
          <SearchIcon />
        </IconButton>
        <IconButton 
          size="small"
          color="inherit"
          className={classes.headerButton}>
          <NotificationsIcon />
        </IconButton>
        <IconButton 
          size="small" 
          color="inherit"
          className={classes.headerButton}
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
          <div className={classes.profilePopoverUsernameContainer}>
            <Typography 
              className={classes.profilePopoverUsername}>
                Madi Nazarbayev
            </Typography>
            <a
              href="/profile"
              className={classes.profilePopoverLink}>
                My profile
            </a>
          </div>
          <div>
            <Button 
              className={classes.logoutButton}>Log out</Button>
          </div>
        </Popover>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
