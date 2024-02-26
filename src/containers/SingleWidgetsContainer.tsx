import { Box } from '@mui/material';
import { SinglePerformanceWidget } from 'components/SinglePerformanceWidget';
import { SingleRevenueWidget } from 'components/SingleRevenueWidget';
import { SingleServerWidget } from 'components/SingleServerWidget';
import { SingleVisitsWidget } from 'components/SingleVisitsWidget';
import { useState } from 'react';
import { SingleWidgetsResponse } from 'types';

// request will goes here in containers
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
  serverOverview: [
    {
      percentages: 60,
      temperature: 35,
      ghz: 2.5,
    },
    {
      percentages: 40,
      temperature: 35,
      ghz: 2.5,
    },
    {
      percentages: 20,
      temperature: 35,
      ghz: 2.5,
    },
  ],
};

export const SingleWidgetsContainer = () => {
  const [showVisits, setShowVisits] = useState(true);
  const [showRevenue, setShowRevenue] = useState(true);
  const [showPerformance, setShowPerformance] = useState(true);
  const [showServer, setShowServer] = useState(true);

  const handleVisitClose = () => {
    setShowVisits(false);
  };

  const handleRevenueClose = () => {
    setShowRevenue(false);
  };

  const handlePerformanceClose = () => {
    setShowPerformance(false);
  };

  const handleServerClose = () => {
    setShowServer(false);
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: '1fr 1fr',
          lg: 'repeat(4, 1fr)',
        },
        gap: '40px',
      }}
    >
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
      {showServer ? (
        <SingleServerWidget
          title="Server Overview"
          data={response.serverOverview}
          onClose={handleServerClose}
        />
      ) : null}
    </Box>
  );
};
