import { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";
import { Typography } from "@mui/material";
import styled from 'styled-components';

// components

// constants
import { APP_TITLE, PAGE_TITLE_PROFILE } from "../utils/constants";
import { UserProfilePageData } from "../utils/types";
import React from "react";

// define css-in-js
const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;`;
const Row = styled.div`
  flex: auto;
  align-items: center;
  justify-content: center;`;

let userMockData: UserProfilePageData = {
  firstname: 'Madi',
  secondname: 'Nazarbayev',
  email: 'madi.nazarbayve@nu.edu.kz',
  links: [
    {url: 'github.com/madin', description: 'GitHub account'}
  ],
  skills: ['c++', 'TypeScript', 'Figma'],
  workspaces: [
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
  ]
}

const Dashboard: FC<{}> = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_PROFILE} | {APP_TITLE}
        </title>
      </Helmet>
      <Root>
        <Row>
          <Typography variant={"h6"} gutterBottom>
            {`${userMockData.firstname} ${userMockData.middlename ?? ''} ${userMockData.secondname}` }
          </Typography>
        </Row>
      </Root>
    </>
  );
};

export default Dashboard;
