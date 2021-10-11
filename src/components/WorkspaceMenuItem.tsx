import React from "react";
import { ListItem, ListItemText, ListItemIcon, Icon, Tooltip, IconButton } from "@mui/material";
import ProfileIcon from '@mui/icons-material/AccountCircle';
import TeamIcon from '@mui/icons-material/Group';

interface WorkspaceMenuItemProps {
  selected: boolean;
  isTeam: boolean;
}

// functional component
const WorkspaceMenuItem = ({ selected, isTeam }: WorkspaceMenuItemProps) => {

  return (
      <Tooltip title={"item1"} placement="right">
        <ListItem button disabled={false} sx={selected ? {
          fontWeight: "bolder",
        }: {}}>
          <ListItemIcon>
            <IconButton size="small">
              <Icon component={isTeam ? TeamIcon : ProfileIcon} />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary={isTeam ? "Team 1" : "Mark Twan"}/>
        </ListItem>
      </Tooltip>
  );
};

export default WorkspaceMenuItem;
