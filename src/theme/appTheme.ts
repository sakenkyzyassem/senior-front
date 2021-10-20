import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { deepPurple, pink } from '@mui/material/colors';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

let theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: pink[300],
    },
    error: {
      main: "#cc0000",
    }
  },
});

theme = responsiveFontSizes(theme);

export default theme;