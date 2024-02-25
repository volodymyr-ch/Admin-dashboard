import { ThemeProvider } from '@mui/material/styles';
import { Router } from 'routes';
import theme from 'theme';
import { GlobalStyles } from 'theme/globalStyles';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Router />
  </ThemeProvider>
);

export default App;
