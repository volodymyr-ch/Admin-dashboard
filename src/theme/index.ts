import { createTheme } from '@mui/material/styles';

import colors from './colors';
import fonts from './fonts';

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      white: string;
    };
    fonts: {
      main: string;
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors: {
      white: string;
    };
    fonts: {
      main: string;
    }
  }
}

const theme = createTheme({
  colors,
  fonts,
});

export default theme;
