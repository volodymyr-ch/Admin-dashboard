import { Box, useTheme } from '@mui/material';
import { SinglePerformanceWidget } from 'components/SinglePerformanceWidget';
import { SingleRevenueWidget } from 'components/SingleRevenueWidget';
import { SingleServerWidget } from 'components/SingleServerWidget';
import { SingleVisitsWidget } from 'components/SingleVisitsWidget';
import { useGetSingleWidgetsQuery } from 'entities/api/singleWidgetsApi';
import { useState } from 'react';
import { PORT } from 'utils/constants';
import { Skeleton } from './Skeleton';

export const SingleWidgetsContainer = () => {
  const theme = useTheme();

  const { data: response, isError, isLoading } = useGetSingleWidgetsQuery();
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

  if (isError) {
    return (
      <div style={{ fontFamily: theme.typography.fontFamily, color: theme.colors.red }}>
        Something went wrong please check if you ran the db with json-server - command to run `npx
        json-server db.json --port {PORT}`
      </div>
    );
  }

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
        <Skeleton show={!response?.revenue && isLoading}>
          {response?.visits ? (
            <SingleVisitsWidget
              title="Visits Today"
              data={response.visits}
              onClose={handleVisitClose}
            />
          ) : null}
        </Skeleton>
      ) : null}
      {showRevenue ? (
        <Skeleton show={!response?.revenue && isLoading}>
          {response?.revenue ? (
            <SingleRevenueWidget
              title="Revenue Breakdown"
              data={response.revenue}
              onClose={handleRevenueClose}
            />
          ) : null}
        </Skeleton>
      ) : null}
      {showPerformance ? (
        <Skeleton show={!response?.performance && isLoading}>
          {response?.performance ? (
            <SinglePerformanceWidget
              title="App Performance"
              data={response.performance}
              onClose={handlePerformanceClose}
            />
          ) : null}
        </Skeleton>
      ) : null}
      {showServer ? (
        <Skeleton show={!response?.serverOverview && isLoading}>
          {response?.serverOverview ? (
            <SingleServerWidget
              title="Server Overview"
              data={response.serverOverview}
              onClose={handleServerClose}
            />
          ) : null}
        </Skeleton>
      ) : null}
    </Box>
  );
};
