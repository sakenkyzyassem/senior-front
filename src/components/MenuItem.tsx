import React from "react";
import clsx from "clsx";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Icon,
  Tooltip,
  IconButton,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import DefaultIcon from "@material-ui/icons/FileCopy";
import { NavLink } from "react-router-dom";

// models
import RouteItem from "../model/RouteItem.model";

// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selected: {
      transition: "box-shadow",
      transitionDuration: "1s",
      fontWeight: "bolder",
      backgroundColor: theme.palette.action.hover
    },
    nested: {
      marginLeft: theme.spacing(2),
    },
    listItemDisabled: {
      cursor: "not-allowed",
    },
  })
);

interface MenuItemProps {
  route: RouteItem;
  selected: boolean;
}

// functional component
const MenuItem = ({ route, selected }: MenuItemProps) => {
  const classes = useStyles();
  // const location = useLocation();

  const handleNavigate = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    if (!route.enabled) e.preventDefault();
  };

  return (
    <NavLink
      to={`${route.path}`}
      style={{ textDecoration: "none", color: "inherit" }}
      key={route.key}
      onClick={handleNavigate}
      className={clsx({
        [classes.listItemDisabled]: !route.enabled,
      })}
    >
      <Tooltip title={route.tooltip || ""} placement="right">
        <ListItem button disabled={!route.enabled} className={clsx({
                [classes.selected]: selected,
              })}>
          <ListItemIcon>
            <IconButton
              
              size="small"
            >
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
