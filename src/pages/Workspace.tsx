import React from "react";
import { FC, ReactElement, useState } from "react";
import { Helmet } from "react-helmet";
import {
  Button, Collapse,
  List,
  ListItem,
  Tooltip
} from "@mui/material";
import { Box } from "@mui/system";
import styled from 'styled-components';

//icons
import { ExpandMore, ExpandLess } from "@mui/icons-material";
// components
import { Cards } from "../components/Cards";
import WorkspaceMenuItem from "../components/WorkspaceMenuItem";

// constants
import { WorkspaceMeta } from "../utils/types";

// define css-in-js
const CardsContainer = styled.div`flex: 3`;
const ButtonContainer = styled.div`flex: 1`;

const mockData: WorkspaceMeta[] = [
  {
    title: "Web Application",
    name: "Shopping Mall Appp",
    description: "Proposal by Prof",
    id: 'workspace001'
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
  return (
    <>
      <Helmet>
        <title>
          Workspace Page
        </title>
      </Helmet>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"}}>
        <CardsContainer>
          <h3>Proposals</h3>
          <Cards title={mockData[0].title} name={mockData[0].name} description={mockData[0].description} />
        </CardsContainer> 
        <ButtonContainer>
          <Button variant="contained" fullWidth>Create new proposal</Button>
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
        </ButtonContainer>
      </Box>
    </>
  );
};

export default Workspace;
