import { Box, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SingleWidget } from 'components/SingleWidget';
import React, { FC } from 'react';
import { Performance } from 'types';

const ColorIcon = styled('span')(({ color }) => ({
  display: 'block',
  height: '6px',
  width: '6px',
  borderRadius: '50%',
  backgroundColor: color,
}));

const ProgressWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '3px',
  backgroundColor: theme.colors.progressBarBackground,
  borderRadius: '5px',
  marginBottom: '6px',
}));

const ProgressBar = styled('div')(({ theme, color }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '3px',
  backgroundColor: color ?? theme.colors.secondary,
  borderRadius: '5px',
}));

type Props = {
  title: React.ReactNode;
  data: Performance;
  onClose: () => void;
};

export const SinglePerformanceWidget: FC<Props> = ({ title, data, onClose }) => {
  const theme = useTheme();

  return (
    <SingleWidget title={title} onClose={onClose}>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
          <ColorIcon color={theme.colors.red} />
          <Typography
            variant="body2"
            sx={{ ml: 1, fontSize: '12px', color: theme.colors.secondaryText }}
          >
            This Period
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ColorIcon color={theme.colors.primary} />
          <Typography
            variant="body2"
            sx={{ ml: 1, fontSize: '12px', color: theme.colors.secondaryText }}
          >
            Last Period
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={{ my: 2 }}>
          <Typography
            variant="body2"
            sx={{ fontSize: '12px', color: theme.colors.secondaryText, mb: 1 }}
          >
            SDK
          </Typography>
          <ProgressWrapper>
            <ProgressBar color={theme.colors.red} style={{ width: `${data.sdk.thisPeriod}%` }} />
          </ProgressWrapper>
          <ProgressWrapper>
            <ProgressBar
              color={theme.colors.primary}
              style={{ width: `${data.sdk.lastPeriod}%` }}
            />
          </ProgressWrapper>
        </Box>
        <Box>
          <Typography
            variant="body2"
            sx={{ fontSize: '12px', color: theme.colors.secondaryText, mb: 1 }}
          >
            Integration
          </Typography>
          <ProgressWrapper>
            <ProgressBar
              color={theme.colors.red}
              style={{ width: `${data.integration.thisPeriod}%` }}
            />
          </ProgressWrapper>
          <ProgressWrapper>
            <ProgressBar
              color={theme.colors.primary}
              style={{ width: `${data.integration.lastPeriod}%` }}
            />
          </ProgressWrapper>
        </Box>
      </Box>
    </SingleWidget>
  );
};
