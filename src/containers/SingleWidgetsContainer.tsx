import { Box } from '@mui/material';
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
  revenue: {
    total: 4.332,
    averageCheck: 830,
    purchases: 0.5,
  },
};

export const SingleWidgetsContainer = () => {
  const [showVisits, setShowVisits] = useState(true);
  const [showRevenue, setShowRevenue] = useState(true);

  const handleVisitClose = () => {
    setShowVisits(false);
  };

  const handleRevenueClose = () => {
    setShowRevenue(false);
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
    </Box>
  );
};
