import { Close as CloseIcon, NorthEast as NorthEastIcon } from '@mui/icons-material';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Paper } from 'components/Paper';
import React, { FC } from 'react';
import { SingleWidgetResponse } from 'types';

const NorthEastIconMui = styled(NorthEastIcon)(({ theme }) => ({
  color: theme.colors.green,
}));

const CloseIconMui = styled(CloseIcon)(({ theme }) => ({
  zoom: 0.6,
  color: theme.colors.secondary,
}));

type Props = {
  title: React.ReactNode;
  data: SingleWidgetResponse;
  onClose: () => void;
};

export const SingleWidget: FC<Props> = ({ title, data, onClose }) => {
  const theme = useTheme();

  return (
    <Paper>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <Typography variant="h6">{title}</Typography>
        <IconButton onClick={() => onClose()}>
          <CloseIconMui />
        </IconButton>
      </Box>
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
    </Paper>
  );
};
