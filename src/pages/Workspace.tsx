import { FC, ReactElement, useState } from "react";
import { Helmet } from "react-helmet";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  Button, Collapse,
  List,
  ListItem,
  Tooltip
} from "@material-ui/core";

//icons
// components

// constants
import { WorkspaceMeta } from "../utils/types";
import React from "react";
import { Cards } from "../components/Cards";
import { ExpandMore } from "@material-ui/icons";
import ExpandLess from "@material-ui/icons/ExpandLess";
import WorkspaceMenuItem from "../components/WorkspaceMenuItem";

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
      marginBottom: 20,
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

const Workspace: FC<{}> = (): ReactElement => {
  const classes = useStyles();
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
      <div className={classes.root}>
        <div className={classes.cardsContainer}>
          <Cards title={mockData[0].title} name={mockData[0].name} description={mockData[0].description} />
        </div> 
        <div className={classes.buttonContainer}>
          <Button 
            variant="contained"
            className={classes.button}>Create new workspace
          </Button>
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
        </div>
      </div>
    </>
  );
};

export default Workspace;
