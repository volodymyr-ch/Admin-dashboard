import { Box } from '@mui/material';
import { SingleVisitsWidget } from 'components/SingleVisitsWidget';
import { useState } from 'react';

const visitsResponse = {
  total: 4.332,
  logins: 830,
  signOut: 0.5,
  rate: 4.5,
};

export const SingleWidgetsContainer = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
      {show ? (
        <SingleVisitsWidget title="Visits Today" data={visitsResponse} onClose={handleClose} />
      ) : null}
    </Box>
  );
};
