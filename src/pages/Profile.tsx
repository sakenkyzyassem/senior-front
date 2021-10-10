import { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

// components

// constants
import { APP_TITLE, PAGE_TITLE_PROFILE } from "../utils/constants";
import { UserProfilePageData } from "../utils/types";
import React from "react";

// define css-in-js

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
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"}}>
        <Box sx={{
          flex: "auto",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Typography variant={"h6"} gutterBottom>
            {`${userMockData.firstname} ${userMockData.middlename ?? ''} ${userMockData.secondname}` }
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
