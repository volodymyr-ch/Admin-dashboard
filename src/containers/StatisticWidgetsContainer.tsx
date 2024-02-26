import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { StatisticWidget } from 'components/StatisticWidget';
import { useState } from 'react';

const response = {
  lightBlue: {
    total: 1000,
    registrations: 100,
    bonusRate: 10,
  },
  singUp: {
    total: 2000,
    registrations: 200,
    bonusRate: 20,
  },
  RNS: {
    total: 3000,
    registrations: 300,
    bonusRate: 30,
  },
};

export const StatisticWidgetsContainer = () => {
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
