import { Typography } from "@mui/material";
import React from "react";


interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <Typography variant="h4" sx={{ textTransform: "uppercase" }} color="textSecondary">
      {title}
    </Typography>
  );
};

export default PageTitle;
