import { GlobalStyles as GlobalStylesMUI } from '@mui/material';
import theme from '.';

export const GlobalStyles = () => (
  <GlobalStylesMUI
    styles={{
      body: {
        margin: 0,
        padding: 0,
        color: theme.colors.mainText,
        background: theme.colors.bodyBackground,
      },
    }}
  />
);
