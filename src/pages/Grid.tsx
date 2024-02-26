import { Box, Typography } from '@mui/material';
import { Breadcrumbs } from 'components/Breadcrumbs';
import { FC } from 'react';

export const Grid: FC = () => (
  <Box>
    <Breadcrumbs />
    <Typography variant="h4" sx={{ mb: '20px' }}>
      Grid
    </Typography>
  </Box>
);
