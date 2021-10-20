import React from "react";
import { FC, ReactElement, useState } from "react";
import { Helmet } from "react-helmet";
import {
  Button, Collapse,
  List,
  ListItem,
  Popover,
  TextField,
  Tooltip,
  Menu,
  MenuItem
} from "@mui/material";
import { Box } from "@mui/system";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

//icons
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';

import Stack from '@mui/material/Stack';
// components
import { Cards } from "../components/Cards";
import WorkspaceMenuItem from "../components/WorkspaceMenuItem";

// constants
import { WorkspaceMeta } from "../utils/types";
import EditTitle from "../components/EditTitle";
import EditDescr from "../components/EditDescr";
import DeleteWorkspace from "../components/DeleteWorkspace";

// define css-in-js

const mockData: WorkspaceMeta[] = [
  {
    title: "Web Application",
    name: "Shopping Mall App",
    description: "Proposal by Prof",
    id: 'workspace001'
  },
  {
    title: "iOS App",
    name: "App",
    description: "Proposal by Prof2",
    id: 'workspace002'
  },
];


/*const mockTeams: TeamsMeta[] = [
  {
    name: "Team 1",
    participants: ["Dana, Aisana, Assem, Meir, Azamat"],
    id: 'team1'
  },
  {
    name: "Team 2",
    participants: ["Dana, Aisana, Assem, Meir, Azamat"],
    id: 'team2'
  }
];*/

const Workspace: FC<{}> = (): ReactElement => {
  const [openParticipants, setOpenParticipants] = useState(false);
  const [openAllTeams, setOpenAllTeams] = useState(false);
  const [openMyTeams, setOpenMyTeams] = useState(false);
  const [openInviteModal, setOpenInviteModal] = useState(false);
  const [settingsAnchor, setSettingsAnchor] = useState(null);
  const [openEditTitle, setOpenEditTitle] = useState(false);
  const [openEditDescr, setOpenEditDescr] = useState(false);
  const [openDeleteWorkspace, setOpenDeleteWorkspace] = useState(false)
  const slctd  = true;

  const handleClickParticipants = (): void => {
    setOpenParticipants(!openParticipants);
  };
  const handleClickAllTeams = (): void => {
    setOpenAllTeams(!openAllTeams);
  };
  const handleClickMyTeams = (): void => {
    setOpenMyTeams(!openMyTeams);
  };
  const handleClickInvite = (): void => {
    setOpenInviteModal(true);
  };
  const closeInviteModal = (): void => {
    setOpenInviteModal(false);
  };
  const handleSubmit = (): void => {
    console.log('submit')
  };
  const openSettingsPopover = (event: any): void => {
    setSettingsAnchor(event.currentTarget);
  }
  const handleEditTitleOpen = (): void => {
    setOpenEditTitle(true);
  }
  const handleEditTitleClose = (): void => {
    setOpenEditTitle(false);
  }
  const handleEditDescrOpen = (): void => {
    setOpenEditDescr(true);
  }
  const handleEditDescrClose = (): void => {
    setOpenEditDescr(false);
  }
  const handleDeleteWorkspaceOpen = (): void => {
    setOpenDeleteWorkspace(true);
  }
  const handleDeleteWorkspaceClose = (): void => {
    setOpenDeleteWorkspace(false);
  }

  return (
    <>
      <Helmet>
        <title>
          Workspace Page
        </title>
      </Helmet>
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"}}>
        <Box>
          <div className="container">
            <Box sx={{display: 'flex', flexDirection:'row', alignItems: 'flex-end'}}>
              <Box>
                <h3>Proposals</h3>
              </Box>
              {/*<Box>
                <Button
                    type="submit"
                    startIcon={<AddIcon/>}
                    variant="outlined"
                    sx={{mx: 2, borderRadius: '7px'}}
                >
                  Add Proposal
                </Button>
              </Box>*/}
            </Box>
            <div className="row">
              <div className="col" >
                <Cards title={mockData[0].title} name={mockData[0].name} description={mockData[0].description} />
              </div>
            </div>
          </div>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start"}}>
          <Box>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" startIcon={<SettingsIcon />} onClick={openSettingsPopover}>
                Settings
              </Button>
              <Popover
                open={Boolean(settingsAnchor)}
                anchorEl={settingsAnchor}
              >
                <Menu
                  id="menu-settings"
                  anchorEl={settingsAnchor}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(settingsAnchor)}
                  onClose={() => {setSettingsAnchor(null);}}
                >
                  <MenuItem>
                    <Button color="primary" onClick={handleEditTitleOpen}>Edit title</Button>
                    <EditTitle open={openEditTitle} handleClose={handleEditTitleClose}></EditTitle>
                  </MenuItem>
                  <MenuItem>
                    <Button color="primary" onClick={handleEditDescrOpen}>Edit description</Button>
                    <EditDescr open={openEditDescr} handleClose={handleEditDescrClose}></EditDescr>
                  </MenuItem>
                  <MenuItem>
                    <Button color="error" onClick={handleDeleteWorkspaceOpen}>Delete workspace</Button>
                    <DeleteWorkspace open={openDeleteWorkspace} handleClose={handleDeleteWorkspaceClose}></DeleteWorkspace>
                  </MenuItem>
                </Menu>
              </Popover>
              <Button variant="contained" onClick={handleClickInvite} startIcon={<AddIcon />}>
                Invite
              </Button>
            </Stack>
          </Box>
          <Box>
            <List>
              <ListItem button onClick={handleClickParticipants}>
                <Tooltip
                    title={`${openParticipants ? "Collapse" : "Expand"}`}
                    placement="bottom"
                >
                  {openParticipants ? <ExpandMore /> : <ExpandLess />}
                </Tooltip>
                Participants
              </ListItem>
              <Collapse in={openParticipants}>
                <WorkspaceMenuItem isTeam={false} selected={slctd}/>
              </Collapse>
              <ListItem button onClick={handleClickAllTeams}>
                <Tooltip
                    title={`${openAllTeams ? "Collapse" : "Expand"}`}
                    placement="bottom"
                >
                  {openAllTeams ? <ExpandMore /> : <ExpandLess />}
                </Tooltip>
                All teams
              </ListItem>
              <Collapse in={openAllTeams}>
                <WorkspaceMenuItem isTeam={true} selected={slctd}/>
              </Collapse>
              <ListItem button onClick={handleClickMyTeams}>
                <Tooltip
                    title={`${openMyTeams ? "Collapse" : "Expand"}`}
                    placement="bottom"
                >
                  {openMyTeams ? <ExpandMore /> : <ExpandLess />}
                </Tooltip>
                My teams
              </ListItem>
              <Collapse in={openMyTeams}>
                <WorkspaceMenuItem isTeam={true} selected={slctd}/>
              </Collapse>
            </List>
          </Box>
        </Box>
      </Box>
      <Modal
          open={openInviteModal}
          onClose={closeInviteModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: "absolute",
          top: '30%',
          left: '30%',
          right: '30%',
          width: 700,
          bgcolor: 'background.paper',
          border: '2px #000',
          borderRadius: '8px',
          boxShadow: 24,
          p: 4}}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Inviting participants
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Type the email of the person you want to invite into this workspace
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, display: 'flex', flexDirection:'row', alignItems: 'center' }}>
            <TextField
                margin="normal"
                required
                id="inviteEmail"
                placeholder="Email Address"
                name="email"
                sx={{ width: '70%' }}
            />
            <Button
                type="submit"
                variant="contained"
                sx={{ mx: 2, p: 2, width: '30%', borderRadius: '7px'  }}
            >
              Invite
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Workspace;
