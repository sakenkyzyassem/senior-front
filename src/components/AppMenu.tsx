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
  const [subRouteOpen, setOpen] = useState(false);
  const location: any = useLocation();

  const handleClick = (): void => {
    setOpen(!subRouteOpen);
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
                    title={`${subRouteOpen ? "Collapse" : "Expand"}`}
                    placement="bottom"
                  >
                    {subRouteOpen ? <ExpandLess /> : <ExpandMore />}
                  </Tooltip>
                </ListItem>
                <Collapse in={subRouteOpen} timeout="auto" unmountOnExit>
                  <List sx={{ ml: (theme) => theme.spacing(2) }}>
                    {route.subRoutes.map((sRoute: RouteItem) => (
                      <MenuItem key={`${sRoute.key}`} route={sRoute} selected={ sRoute.path === location.pathname}/>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <MenuItem key={route.key} route={route} selected={ route.path === location.pathname} />
            )}
            {route.appendDivider && <Divider sx={{ mt: (theme) => theme.spacing(1), mb: (theme) => theme.spacing(1) }} />}
          </>
        ))}
      </List>
  );
};

export default Menu;
