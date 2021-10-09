import { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

// components

// constants
import { APP_TITLE } from "../utils/constants";
import { WorkspaceMeta } from "../utils/types";
import React from "react";
import { Cards } from "../components/Cards";

// define css-in-js
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
      }
    },
    cardsContainer: {
      flex: 3,
    },
    buttonContainer: {
      flex: 1,
    }, 
    button: {
      backgroundColor: "#6200EE",
      color: "white",
      marginLeft: 15,
    }
  })
);

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
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>
          {} | {APP_TITLE}
        </title>
      </Helmet>
      <div className={classes.root}>
        <div className={classes.cardsContainer}>
          <Cards title={mockData[0].title} name={mockData[0].name} description={mockData[0].description} />
        </div> 
        <div className={classes.buttonContainer}>
          <Button 
            variant="contained"
            className={classes.button}>Create new workspace</Button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
