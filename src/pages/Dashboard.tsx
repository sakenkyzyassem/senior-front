import { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";
import { Button, Box } from "@mui/material";
import styled from 'styled-components';

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
          <Button variant="contained" fullWidth>Create new workspace</Button>
        </ButtonContainer>
      </Box>
    </>
  );
};

export default Dashboard;
