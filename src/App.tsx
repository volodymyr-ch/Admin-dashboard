import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Router } from 'routes';
import theme from 'theme';
import { GlobalStyles } from 'theme/globalStyles';

const App = () => (
  <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <GlobalStyles />
      <Router />
    </LocalizationProvider>
  </ThemeProvider>
);

export default App;
