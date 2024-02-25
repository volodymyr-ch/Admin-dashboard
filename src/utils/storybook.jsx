import { ThemeProvider } from '@mui/material/styles';
import theme from 'theme';
import { GlobalStyles } from 'theme/globalStyles';

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Story />
  </ThemeProvider>
);
