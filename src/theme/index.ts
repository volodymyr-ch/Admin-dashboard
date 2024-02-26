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
      widgetShadow: string;
      navbarItemBackground: string;
      red: string;
      green: string;
      purple: string;
      paperBackground: string;
      progressBarBackground: string;
      yellow: string;
      blue: string;
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
      widgetShadow: string;
      navbarItemBackground: string;
      red: string;
      green: string;
      purple: string;
      paperBackground: string;
      progressBarBackground: string;
      yellow: string;
      blue: string;
    };
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 767,
      md: 992,
      lg: 1200,
      xl: 1621,
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 14,
  },
  colors,
});

export default theme;
