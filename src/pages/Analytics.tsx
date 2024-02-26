import { Box, Typography } from '@mui/material';
import { Breadcrumbs } from 'components';
import { StatisticWidgetsContainer } from 'containers';
import { FC } from 'react';

export const Analytics: FC = () => (
  <Box>
    <Breadcrumbs />
    <Typography variant="h4" sx={{ mb: '20px' }}>
      Analytics
    </Typography>
    <StatisticWidgetsContainer />
  </Box>
);
