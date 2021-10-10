import React, { useCallback } from "react";
import { Card, Button, CardActions, CardContent, Typography } from "@mui/material";

interface Props {
    title: string,
    name: string,
    description: string,
}

export const Cards = ({title, name, description}: Props) => {
  const onWorkspaceCardClick = useCallback( () => {
      console.log('open workspace page');
    },
    [],
  );
    return (
        //will need to map through all the courses and generate the following card for each
        <Card sx={{ mx: 15, mb: 20 }} elevation={2}>
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
                <Button size="small" variant="text" onClick={onWorkspaceCardClick}
                >See More</Button>
            </CardActions>
        </Card>
    )
}
