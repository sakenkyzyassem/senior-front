// import clsx from "clsx";
import { IconButton, Drawer as MuiDrawer, Toolbar } from "@mui/material";
// import { createStyles, makeStyles } from '@mui/styles';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import styled from 'styled-components';

// components
import AppMenu from "./AppMenu";

// constants
import { DRAWER_WIDTH } from "../utils/constants";
import React from "react";

// define interface to represent component props
interface NavigationProps {
  open: boolean;
  handleMenuToggle: () => void;
}

const Drawer = styled(MuiDrawer)(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: DRAWER_WIDTH,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const Navigation = ({open, handleMenuToggle }: NavigationProps) => {
  return (
    <Drawer open={open} variant="permanent">
      <Toolbar sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: 'primary.main',
        px: [1],
      }}>
        <IconButton onClick={handleMenuToggle} size="large">
          <ChevronLeftIcon sx={{color: (theme) => theme.palette.background.default}}/>
        </IconButton>
      </Toolbar>
      <AppMenu />
    </Drawer>
  );
};

export default Navigation;
