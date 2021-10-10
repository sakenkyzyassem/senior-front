import { FC, ReactNode, useReducer } from "react";
import { Toolbar, CssBaseline } from "@mui/material";
import styled from 'styled-components';

// components
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

// constants
import { FOOTER_HEIGHT } from "../utils/constants";
import React from "react";

// define css-in-js
const Root = styled.div`
      flex: 1;
      display: flex;
      flex-direction: column;`;

// define interface to represent component props
interface LayoutProps {
  toggleTheme?: () => void;
  useDefaultTheme?: boolean;
  children: ReactNode;
}

// functional component
const Layout: FC<LayoutProps> = ({
  //toggleTheme,
  //useDefaultTheme,
  children,
}: LayoutProps) => {
  const [open, toggle] = useReducer((open) => !open, true);
  let content = {
    flexGrow: 1,
    padding: 'spacing(3)',
    minHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
    background: 'background.paper',
    marginLeft: 'spacing(7)' + 1,
    ["sm"]: {
      marginLeft: 'spacing(9)' + 1,
    },
  }; 
  let Content = styled.main(content
  );
  return (
    <Root>
      <CssBaseline />
      <Header
        open={open}
        handleMenuOpen={toggle}
        //toggleTheme={toggleTheme}
        //useDefaultTheme={useDefaultTheme}
      />
      <Navigation open={open} handleMenuClose={toggle} />
      <Content>
        <Toolbar />
        {children}
      </Content>
      <footer>
        <Footer />
      </footer>
    </Root>
  );
};

export default Layout;
