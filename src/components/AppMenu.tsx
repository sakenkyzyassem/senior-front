import { useState } from "react";
// import clsx from "clsx";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Icon,
  Tooltip,
  IconButton,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import DefaultIcon from "@material-ui/icons/FileCopy";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { useLocation } from "react-router-dom";

// components
import MenuItem from "./MenuItem";

// app routes
import { routes } from "../config";

// interfaces
import RouteItem from "../model/RouteItem.model";
import React from "react";

// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    nested: {
      marginLeft: theme.spacing(2),
    },
    selected: {
      transitionDuration: "1s",
      background: theme.palette.primary.light,
      color: 'white'
    },
  })
);

// functional component
const Menu = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const location: any = useLocation();

  const handleClick = (): void => {
    setOpen(!open);
  };

  return (
    <List>
      {routes.map((route: RouteItem) => (
        <>
          {route.subRoutes ? (
            <>
              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <IconButton
                    size="small"
                  >
                    <Icon component={route.icon || DefaultIcon} />
                  </IconButton>
                </ListItemIcon>
                <ListItemText primary={route.title} />
                <Tooltip
                  title={`${open ? "Collapse" : "Expand"}`}
                  placement="bottom"
                >
                  {open ? <ExpandLess /> : <ExpandMore />}
                </Tooltip>
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List className={classes.nested}>
                  {route.subRoutes.map((sRoute: RouteItem) => (
                    <MenuItem key={`${sRoute.key}`} route={sRoute} selected={ sRoute.path === location.pathname}/>
                  ))}
                </List>
              </Collapse>
            </>
          ) : (
            <MenuItem key={route.key} route={route} selected={ route.path === location.pathname} />
          )}
          {route.appendDivider && <Divider className={classes.divider} />}
        </>
      ))}
    </List>
  );
};

export default Menu;
