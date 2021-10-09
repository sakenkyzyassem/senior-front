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
  selected: boolean;
}

// functional component
const WorkspaceMenuItem = ({ selected }: MenuItemProps) => {
  const classes = useStyles();
  // const location = useLocation();

  return (
      <Tooltip title={"item1"} placement="right">
        <ListItem button disabled={false} className={clsx({
                [classes.selected]: selected,
              })}>
          <ListItemIcon>
            <IconButton
              
              size="small"
            >
              <Icon component={DefaultIcon} />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary={"text"} />
        </ListItem>
      </Tooltip>
  );
};

export default WorkspaceMenuItem;
