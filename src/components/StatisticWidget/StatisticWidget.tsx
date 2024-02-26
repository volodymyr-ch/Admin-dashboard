import { NorthEast as NorthEastIcon, SouthEast as SouthEastIcon } from '@mui/icons-material';
import { Box, Divider, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Dropdown } from 'components/Dropdown';
import { Paper } from 'components/Paper';
import React, { FC } from 'react';
import { StatisticWidgetsResponseItem } from 'types';

const SouthEastIconMui = styled(SouthEastIcon)(({ theme }) => ({
  color: theme.colors.red,
}));

const NorthEastIconMui = styled(NorthEastIcon)(({ theme }) => ({
  color: theme.colors.green,
}));

type Props = {
  title: React.ReactNode;
  color: string;
  data: StatisticWidgetsResponseItem;
  period: string;
  onPeriodChange: (period: string) => void;
};

const ColorIcon = styled('span')(({ color }) => ({
  display: 'block',
  height: '10px',
  width: '10px',
  borderRadius: '50%',
  backgroundColor: color,
}));

export const StatisticWidget: FC<Props> = ({ title, color, data, period, onPeriodChange }) => {
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
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ColorIcon color={color} />
          <Typography variant="h5" fontSize="20px" sx={{ ml: 1 }}>
            {title}
          </Typography>
        </Box>
        <Dropdown value={period} onChange={onPeriodChange} />
      </Box>
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        {data.total}
      </Typography>
      <Divider sx={{ my: 2, mx: '-20px' }} />
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography variant="body1" sx={{ color: theme.colors.mainText, mr: 1 }}>
              +{data.registrations}{' '}
            </Typography>
            <NorthEastIconMui />
          </Box>
          <Typography variant="body2" sx={{ color: theme.colors.secondaryText, fontSize: '12px' }}>
            Registrations
          </Typography>
        </Box>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography variant="body2" sx={{ color: theme.colors.mainText, mr: 1 }}>
              {Math.abs(data.bonusRate)}%{' '}
            </Typography>
            {data.bonusRate > 0 ? <SouthEastIconMui /> : <NorthEastIconMui />}
          </Box>
          <Typography variant="body2" sx={{ color: theme.colors.secondaryText, fontSize: '12px' }}>
            Bounce Rate
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
