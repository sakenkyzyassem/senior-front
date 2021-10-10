// import clsx from "clsx";
import { IconButton, Drawer, Toolbar } from "@mui/material";
// import { createStyles, makeStyles } from '@mui/styles';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

// components
import AppMenu from "./AppMenu";

// constants
// import { DRAWER_WIDTH } from "../utils/constants";
import React from "react";

// define css-in-js
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     drawer: {
//       width: DRAWER_WIDTH,
//       flexShrink: 0,
//       whiteSpace: "nowrap",
//     },
//     drawerOpen: {
//       width: DRAWER_WIDTH,
//       transition: theme.transitions.create("width", {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     },
//     drawerClose: {
//       transition: theme.transitions.create("width", {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       overflowX: "hidden",
//       width: theme.spacing(7) + 1,
//       [theme.breakpoints.up("sm")]: {
//         width: theme.spacing(9) + 1,
//       },
//     },
//   })
// );

// define interface to represent component props
interface NavigationProps {
  open: boolean;
  handleMenuClose: () => void;
}

const Navigation = ({ handleMenuClose }: NavigationProps) => {
  // const classes = useStyles();
  return (
    <Drawer anchor="left"
      variant="permanent"
    >
      <Toolbar sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "spacing(0, 1)",
        background: 'primary.main',
      }}>
        <IconButton onClick={handleMenuClose} size="large">
          <ChevronLeftIcon htmlColor="#fff" />
        </IconButton>
      </Toolbar>
      <AppMenu />
    </Drawer>
  );
};

export default Navigation;
