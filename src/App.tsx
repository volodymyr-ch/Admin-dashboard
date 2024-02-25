import { GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Router } from 'routes';
import theme from 'theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles
      styles={{
        body: {
          margin: 0,
          padding: 0,
          color: theme.colors.mainText,
          background: theme.colors.bodyBackground,
        },
      }}
    />
    <Router />
  </ThemeProvider>
);

export default App;
