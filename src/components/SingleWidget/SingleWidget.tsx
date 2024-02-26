import { Close as CloseIcon } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Paper } from 'components/Paper';
import React, { FC } from 'react';

const CloseIconMui = styled(CloseIcon)(({ theme }) => ({
  zoom: 0.6,
  color: theme.colors.secondary,
}));

type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
  onClose: () => void;
};

export const SingleWidget: FC<Props> = ({ title, children, onClose }) => (
  <Paper styles={{ position: 'relative' }}>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="h6" sx={{ fontSize: '18px' }}>
        {title}
      </Typography>
      <IconButton
        sx={{ position: 'absolute', right: '10px', top: '14px' }}
        onClick={() => onClose()}
      >
        <CloseIconMui />
      </IconButton>
    </Box>
    {children}
  </Paper>
);
