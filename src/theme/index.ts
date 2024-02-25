import { createTheme } from '@mui/material/styles';

import colors from './colors';

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      white: string;
      primary: string;
      secondary: string;
      drawerBackground: string;
      mainText: string;
      secondaryText: string;
      bodyBackground: string;
      boxShadow: string;
      navbarItemBackground: string;
      red: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors: {
      white: string;
      primary: string;
      secondary: string;
      drawerBackground: string;
      mainText: string;
      secondaryText: string;
      bodyBackground: string;
      boxShadow: string;
      navbarItemBackground: string;
      red: string;
    };
  }
}

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 14,
  },
  colors,
});

export default theme;
