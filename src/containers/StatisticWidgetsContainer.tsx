import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { StatisticWidget } from 'components/StatisticWidget';
import { useGetStatisticWidgetsQuery } from 'entities/api/statisticWidgetsApi';
import { useState } from 'react';
import { Skeleton } from './Skeleton';

export const StatisticWidgetsContainer = () => {
  const { data: response, isLoading } = useGetStatisticWidgetsQuery();

  const [lightBluePeriod, setLightPeriod] = useState('month');
  const [singUpPeriod, setSingUpPeriod] = useState('month');
  const [RNSPeriod, setRNSPeriod] = useState('month');
  const theme = useTheme();

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
      <Skeleton show={!response?.lightBlue && isLoading}>
        {response?.lightBlue ? (
          <StatisticWidget
            title="Statistic Light Blue"
            color={theme.colors.primary}
            period={lightBluePeriod}
            onPeriodChange={setLightPeriod}
            data={response.lightBlue}
          />
        ) : null}
      </Skeleton>
      <Skeleton show={!response?.singUp}>
        {response?.singUp ? (
          <StatisticWidget
            title="Statistic SingUp"
            color={theme.colors.red}
            period={singUpPeriod}
            onPeriodChange={setSingUpPeriod}
            data={response.singUp}
          />
        ) : null}
      </Skeleton>
      <Skeleton show={!response?.RNS}>
        {response?.RNS ? (
          <StatisticWidget
            title="Statistic RNS"
            color={theme.colors.purple}
            period={RNSPeriod}
            onPeriodChange={setRNSPeriod}
            data={response.RNS}
          />
        ) : null}
      </Skeleton>
    </Box>
  );
};
