import React from "react";
import { ListItem, ListItemText, ListItemIcon, Icon, Tooltip, IconButton } from "@mui/material";
import DefaultIcon from "@mui/icons-material/FileCopy";

interface MenuItemProps {
  selected: boolean;
}

// functional component
const WorkspaceMenuItem = ({ selected }: MenuItemProps) => {
  // const location = useLocation();

  return (
      <Tooltip title={"item1"} placement="right">
        <ListItem button disabled={false} sx={selected ? {
          transition: "box-shadow",
          transitionDuration: "1s",
          fontWeight: "bolder",
          backgroundColor: "action.hover"
        }: {}}>
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
