import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import theme from 'theme';
import { GlobalStyles } from 'theme/globalStyles';

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Story />
  </ThemeProvider>
);

export const withLocalization = (Story) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Story />
  </LocalizationProvider>
);
