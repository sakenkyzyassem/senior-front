import { Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

// constants
import { FOOTER_TEXT, FOOTER_HEIGHT } from "../utils/constants";

// functional component
const Footer = () => {
  return (
    <Box sx={{ 
      flex: 1, 
      display: 'flex', 
      justifyContent: 'center',
      background: 'background.paper',
      minHeight: FOOTER_HEIGHT
    }}>
      <Link
        href={`${process.env.REACT_APP_API_URL}`}
        target="_blank"
        rel="noreferrer"
        sx={{ textTransform: 'uppercase' }}
      >
        {FOOTER_TEXT}
      </Link>
    </Box>
  );
};

export default Footer;
