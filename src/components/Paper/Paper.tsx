import { Box, useTheme } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export const Paper: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minWidth: '100px',
        minHeight: '100px',
        background: theme.colors.bodyBackground,
        boxShadow: theme.colors.boxShadow,
      }}
    >
      {children}
    </Box>
  );
};
