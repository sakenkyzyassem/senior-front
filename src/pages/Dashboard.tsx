import { FC, ReactElement, useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Box, Dialog, DialogActions, DialogContent, TextField, DialogTitle } from "@mui/material";
import styled from 'styled-components';
import { WorkspaceData} from '../utils/types';

// components

// constants
import { APP_TITLE } from "../utils/constants";
import { WorkspaceMeta } from "../utils/types";
import React from "react";
import { Cards } from "../components/Cards";

// define css-in-js
const CardsContainer = styled.div`flex: 3;`;
const ButtonContainer = styled.div`flex: 1;`;

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

const Dashboard: FC<{}> = (): ReactElement => {
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = ()  => {
    setOpen(false);
  }
  
  const createWorkspace = (data: WorkspaceData): WorkspaceMeta => {
    const id = data.title + Date.now().toString();
    const workspace: WorkspaceMeta = {
      title: data.title,
      name: data.name,
      description: data.descr,
      id: id,
    };
    console.log(workspace);
    return workspace;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const abbr = data.get('abbr')?.toString();
    const title = data.get('title')?.toString();
    const descr = data.get('descr')?.toString();

    if(abbr && title && descr) {
      createWorkspace({
        title: abbr, 
        name: title,
        descr: descr,
      });
    }
};

  return (
    <>
      <Helmet>
        <title>
          {} | {APP_TITLE}
        </title>
      </Helmet>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <CardsContainer>
          <Cards title={mockData[0].title} name={mockData[0].name} description={mockData[0].description} />
        </CardsContainer> 
        <ButtonContainer>
          <Button variant="contained" fullWidth onClick={handleClickOpen}>Create new workspace</Button>
        </ButtonContainer>
      </Box>
      <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{m: 'auto'}}>Create new workspace</DialogTitle>
        <Box component="form" onSubmit={handleSubmit}
              sx={{
                m: "auto",
                width: "fit-content",
              }}
            >
          <DialogContent>
              <TextField
                required
                name="abbr"
                id="abbr"
                label="Abbreviation"
                placeholder="e.g. CSCI 290"
                helperText="Enter an abbreviation for a workspace"
                sx={{
                  mt: 1,
                  ml: 2,
                }}
              />
              <TextField
                required
                name="title"
                id="title"
                label="Title"
                placeholder="e.g. Artificial Intelligence"
                helperText="Enter a title for a workspace"
                sx={{
                  mt: 1,
                  ml: 2,
                }}
              />
              <TextField
                multiline
                required
                name="descr"
                id="descr"
                label="Description"
                placeholder="e.g. Course mandatory for 3rd year students"
                helperText="Enter a description for a workspace"
                sx={{
                  mt: 1,
                  ml: 2,
                }}
              />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" type="submit">Create</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default Dashboard;
