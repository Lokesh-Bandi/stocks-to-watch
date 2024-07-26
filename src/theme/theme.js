import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#679965',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  breakpoints: {
    values: {
      xs: 0, // Breakpoint for extra small screens, default: 0
      sm: 600, // Breakpoint for small screens, default: 600
      md: 960, // Breakpoint for medium screens, default: 960
      lg: 1280, // Breakpoint for large screens, default: 1280
      xl: 1920, // Breakpoint for extra large screens, default: 1920
    },
  },
});

export default theme;
