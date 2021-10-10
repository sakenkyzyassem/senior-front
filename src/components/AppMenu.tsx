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
} from "@mui/material";
import { FileCopy as DefaultIcon, ExpandLess, ExpandMore } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

// components
import MenuItem from "./MenuItem";

// app routes
import { routes } from "../config";

// interfaces
import RouteItem from "../model/RouteItem.model";
import React from "react";

// functional component
const Menu = () => {
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
                <List sx={{ ml: 'spacing(2)' }}>
                  {route.subRoutes.map((sRoute: RouteItem) => (
                    <MenuItem key={`${sRoute.key}`} route={sRoute} selected={ sRoute.path === location.pathname}/>
                  ))}
                </List>
              </Collapse>
            </>
          ) : (
            <MenuItem key={route.key} route={route} selected={ route.path === location.pathname} />
          )}
          {route.appendDivider && <Divider sx={{ mt: 'spacing(1)', mb: 'spacing(1)' }} />}
        </>
      ))}
    </List>
  );
};

export default Menu;
