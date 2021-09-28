import { createMuiTheme, Theme } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";

// define light theme colors
export const lightTheme: Theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: '#6e2cfa',
    },
    secondary: {
      main: pink[300],
    },
  },
});

// define dark theme colors
export const darkTheme: Theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: pink[300],
    },
    secondary: {
      main: '#6e2cfa',
    },
  },
});
