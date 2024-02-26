import { Box } from '@mui/material';
import { SinglePerformanceWidget } from 'components/SinglePerformanceWidget';
import { SingleRevenueWidget } from 'components/SingleRevenueWidget';
import { SingleVisitsWidget } from 'components/SingleVisitsWidget';
import { useState } from 'react';
import { SingleWidgetsResponse } from 'types';

const response: SingleWidgetsResponse = {
  visits: {
    total: 4.332,
    logins: 830,
    signOut: 0.5,
    rate: 4.5,
  },
  revenue: [
    { name: 'SMX', y: 67 },
    { name: 'Direct', y: 62 },
    { name: 'Networks', y: 77 },
  ],
  performance: {
    sdk: {
      thisPeriod: 60,
      lastPeriod: 71,
    },
    integration: {
      thisPeriod: 53,
      lastPeriod: 38,
    },
  },
};

export const SingleWidgetsContainer = () => {
  const [showVisits, setShowVisits] = useState(true);
  const [showRevenue, setShowRevenue] = useState(true);
  const [showPerformance, setShowPerformance] = useState(true);

  const handleVisitClose = () => {
    setShowVisits(false);
  };

  const handleRevenueClose = () => {
    setShowRevenue(false);
  };

  const handlePerformanceClose = () => {
    setShowPerformance(false);
  };

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
      {showVisits ? (
        <SingleVisitsWidget
          title="Visits Today"
          data={response.visits}
          onClose={handleVisitClose}
        />
      ) : null}
      {showRevenue ? (
        <SingleRevenueWidget
          title="Revenue Breakdown"
          data={response.revenue}
          onClose={handleRevenueClose}
        />
      ) : null}
      {showPerformance ? (
        <SinglePerformanceWidget
          title="App Performance"
          data={response.performance}
          onClose={handlePerformanceClose}
        />
      ) : null}
    </Box>
  );
};
