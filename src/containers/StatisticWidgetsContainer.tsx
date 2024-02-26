import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { StatisticWidget } from 'components/StatisticWidget';
import { useGetStatisticWidgetsQuery } from 'entities/api/statisticWidgetsApi';
import { useState } from 'react';

export const StatisticWidgetsContainer = () => {
  const { data: response } = useGetStatisticWidgetsQuery();

  const [lightBluePeriod, setLightPeriod] = useState('month');
  const [singUpPeriod, setSingUpPeriod] = useState('month');
  const [RNSPeriod, setRNSPeriod] = useState('month');
  const theme = useTheme();

  if (!response) {
    return null;
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        },
        gap: '40px',
      }}
    >
      <StatisticWidget
        title="Statistic Light Blue"
        color={theme.colors.primary}
        period={lightBluePeriod}
        onPeriodChange={setLightPeriod}
        data={response.lightBlue}
      />
      <StatisticWidget
        title="Statistic SingUp"
        color={theme.colors.red}
        period={singUpPeriod}
        onPeriodChange={setSingUpPeriod}
        data={response.singUp}
      />
      <StatisticWidget
        title="Statistic RNS"
        color={theme.colors.purple}
        period={RNSPeriod}
        onPeriodChange={setRNSPeriod}
        data={response.RNS}
      />
    </Box>
  );
};
