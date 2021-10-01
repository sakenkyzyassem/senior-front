import React from "react"
import Card from "@material-ui/core/Card";
import { Button, CardActions, CardContent, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(()=> 
    createStyles({
        root: {
            marginRight: 15,
            marginLeft: 15,
            marginBottom: 20,
        },
        button: {
            color: "#5600E8",
        }
    })
);

interface Props {
    title: string,
    name: string,
    description: string,
};

export const Cards = ({title, name, description}: Props) => {
    const classes = useStyles();
    return (
        //will need to map through all the courses and generate the following card for each
        <Card className={classes.root}>
            <CardContent>
                <Typography 
                    variant={"h6"}
                    gutterBottom>{title}</Typography>
                <Typography 
                    variant={"h5"}
                    gutterBottom>{name}</Typography>
                <Typography
                    variant={"caption"}>{description}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small"
                    className={classes.button}>See More</Button>
            </CardActions>
        </Card>
    )
}
