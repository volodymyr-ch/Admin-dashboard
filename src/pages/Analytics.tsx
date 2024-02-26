import { Box, Typography } from '@mui/material';
import { Breadcrumbs } from 'components/Breadcrumbs';
import { SingleWidgetContainer, StatisticWidgetsContainer } from 'containers';
import { FC } from 'react';

export const Analytics: FC = () => (
  <Box>
    <Breadcrumbs />
    <Typography variant="h4" sx={{ mb: '20px' }}>
      Analytics
    </Typography>
    <Box sx={{ display: 'grid', gap: '40px' }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
        <SingleWidgetContainer />
      </Box>
      <StatisticWidgetsContainer />
    </Box>
  </Box>
);
