import { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

// components

// constants
import { APP_TITLE, PAGE_TITLE_PROFILE } from "../utils/constants";
import { UserProfilePageData } from "../utils/types";
import React from "react";

// define css-in-js
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
      },
    },
    row: {
      flex: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
    }
  })
);

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
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_PROFILE} | {APP_TITLE}
        </title>
      </Helmet>
      <div className={classes.root}>
        <div className={classes.row}>
          <Typography variant={"h6"} gutterBottom>
            {`${userMockData.firstname} ${userMockData.middlename ?? ''} ${userMockData.secondname}` }
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
