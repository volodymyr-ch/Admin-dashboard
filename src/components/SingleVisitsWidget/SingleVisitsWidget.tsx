import { NorthEast as NorthEastIcon } from '@mui/icons-material';
import { Box, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SingleWidget } from 'components/SingleWidget';
import React, { FC } from 'react';
import { Visits } from 'types';

const NorthEastIconMui = styled(NorthEastIcon)(({ theme }) => ({
  color: theme.colors.green,
}));

type Props = {
  title: React.ReactNode;
  data: Visits;
  onClose: () => void;
};

export const SingleVisitsWidget: FC<Props> = ({ title, data, onClose }) => {
  const theme = useTheme();

  return (
    <SingleWidget title={title} onClose={onClose}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 400, mt: 3, mb: 2 }}>
          {data.total}
        </Typography>
        <NorthEastIconMui />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="body2" sx={{ color: theme.colors.mainText, mb: 2 }}>
            +{data.logins}{' '}
          </Typography>
          <Typography variant="body2" sx={{ color: theme.colors.secondaryText, fontSize: '12px' }}>
            Logins
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ color: theme.colors.mainText, mb: 2 }}>
            {Math.abs(data.signOut)}%
          </Typography>
          <Typography variant="body2" sx={{ color: theme.colors.secondaryText, fontSize: '12px' }}>
            Sign out
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ color: theme.colors.mainText, mb: 2 }}>
            {Math.abs(data.rate)}%
          </Typography>
          <Typography variant="body2" sx={{ color: theme.colors.secondaryText, fontSize: '12px' }}>
            Rate
          </Typography>
        </Box>
      </Box>
    </SingleWidget>
  );
};
