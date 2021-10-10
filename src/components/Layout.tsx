import { FC, ReactNode, useReducer } from "react";
import { Toolbar, CssBaseline, Box, Container } from "@mui/material";

// components
import Header from "./Header";
import Navigation from "./Navigation";

// constants
import React from "react";


// define interface to represent component props
interface LayoutProps {
  children: ReactNode;
}

// functional component
const Layout: FC<LayoutProps> = ({
  children,
}: LayoutProps) => {
  const [open, toggle] = useReducer((open) => !open, true);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header
        open={open}
        handleMenuToggle={toggle}
      />
      <Navigation open={open} handleMenuToggle={toggle} />
      <Box
          component="main"
          sx={{
            backgroundColor: (theme) => theme.palette.background.paper,
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {children}
          </Container>
      </Box>
      {/* <Box component="footer" maxWidth="lg">
        <Footer />
      </Box> */}
    </Box>
  );
};

export default Layout;
