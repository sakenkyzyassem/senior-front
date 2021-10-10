import React from "react";
import { ListItem, ListItemText, ListItemIcon, Icon, Tooltip, IconButton } from "@mui/material";
import DefaultIcon from "@mui/icons-material/FileCopy";
import { NavLink } from "react-router-dom";

// models
import RouteItem from "../model/RouteItem.model";

interface MenuItemProps {
  route: RouteItem;
  selected: boolean;
}

// functional component
const MenuItem = ({ route, selected }: MenuItemProps) => {
  // const location = useLocation();

  const handleNavigate = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    if (!route.enabled) e.preventDefault();
  };

  return (
    <NavLink
      to={`${route.path}`}
      style={route.enabled ? { textDecoration: "none", color: "inherit" } 
      : {textDecoration: "none", color: "inherit", cursor: "none"}}
      key={route.key}
      onClick={handleNavigate}
    >
      <Tooltip title={route.tooltip || ""} placement="right">
        <ListItem button disabled={!route.enabled} sx={selected ? {
          transition: "box-shadow",
          transitionDuration: "1s",
          fontWeight: "bolder",
          backgroundColor: 'action.hover'
        } : {}}>
          <ListItemIcon>
            <IconButton size="small">
              <Icon component={route.icon || DefaultIcon} />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary={route.title} />
        </ListItem>
      </Tooltip>
    </NavLink>
  );
};

export default MenuItem;
