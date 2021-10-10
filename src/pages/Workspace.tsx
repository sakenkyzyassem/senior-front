import { FC, ReactElement, useState } from "react";
import { Helmet } from "react-helmet";
import {
  Button, Collapse,
  List,
  ListItem,
  Tooltip
} from "@mui/material";
import styled from 'styled-components';

//icons
// components

// constants
import { WorkspaceMeta } from "../utils/types";
import React from "react";
import { Cards } from "../components/Cards";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import WorkspaceMenuItem from "../components/WorkspaceMenuItem";

// define css-in-js
const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center`;
const CardsContainer = styled.div`flex: 3`;
const ButtonContainer = styled.div`flex: 1`;

const mockData: WorkspaceMeta[] = [
  {
    title: "CSCI 390",
    name: "Artificial Intelligence",
    description: "Just a course",
    id: 'workspace001'
  },
  {
    title: "CSCI 269",
    name: "Human Intelligence",
    description: "Mock a course",
    id: 'workspace002'
  }
];

const Workspace: FC<{}> = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const slctd  = true;

  const handleClick = (): void => {
    setOpen(!open);
  };
  return (
    <>
      <Helmet>
        <title>
          Workspace Page
        </title>
      </Helmet>
      <Root>
        <CardsContainer>
          <Cards title={mockData[0].title} name={mockData[0].name} description={mockData[0].description} />
        </CardsContainer> 
        <ButtonContainer>
          <Button variant="contained" fullWidth>Create new workspace</Button>
          <List>
            <ListItem button onClick={handleClick}>
              <Tooltip
                title={`${open ? "Collapse" : "Expand"}`}
                placement="bottom"
              >
                {open ? <ExpandMore /> : <ExpandLess />}
              </Tooltip>
              Participants
            </ListItem>
            <Collapse in={open}>
              <WorkspaceMenuItem selected={slctd}/>
              <WorkspaceMenuItem selected={slctd}/>
              <WorkspaceMenuItem selected={slctd}/>
            </Collapse>
          </List>
        </ButtonContainer>
      </Root>
    </>
  );
};

export default Workspace;
