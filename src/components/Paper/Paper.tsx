import { Box, useTheme } from '@mui/material';
import { FC, ReactNode } from 'react';

type Props = {
  styles?: Record<string, string | number>;
  children: ReactNode;
};

export const Paper: FC<Props> = ({ styles, children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minWidth: '100px',
        minHeight: '100px',
        background: theme.colors.white,
        boxShadow: theme.colors.widgetShadow,
        borderRadius: '10px',
        padding: '15px 20px',
        ...styles,
      }}
    >
      {children}
    </Box>
  );
};
