import { Box, Typography } from '@mui/material';
import { Breadcrumbs } from 'components/Breadcrumbs';
import {
  DailyLineChartWidgetContainer,
  SingleWidgetsContainer,
  StatisticWidgetsContainer,
} from 'containers';
import { FC } from 'react';

export const Analytics: FC = () => (
  <Box>
    <Breadcrumbs />
    <Typography variant="h4" sx={{ mb: '20px' }}>
      Analytics
    </Typography>
    <Box sx={{ display: 'grid', gap: '40px' }}>
      <SingleWidgetsContainer />
      <DailyLineChartWidgetContainer />
      <StatisticWidgetsContainer />
    </Box>
  </Box>
);
