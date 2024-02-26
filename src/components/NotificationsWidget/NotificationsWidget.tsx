import { Box, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Paper } from 'components/Paper';
import React, { FC } from 'react';

type Props = {
  title: React.ReactNode;
  data: string[];
};

const NotificationsLabel = styled('span')(({ theme }) => ({
  fontSize: '14px',
  borderRadius: '50%',
  backgroundColor: theme.colors.primary,
  display: 'inline-block',
  width: '20px',
  height: '20px',
  margin: '0 8px',
  textAlign: 'center',
}));

export const NotificationsWidget: FC<Props> = ({ title, data }) => {
  const theme = useTheme();

  return (
    <Paper>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box>
          <Typography variant="h6" sx={{ fontSize: '18px' }}>
            {title}
          </Typography>
        </Box>
        <NotificationsLabel
          style={{ color: theme.colors.white, fontFamily: theme.typography.fontFamily }}
        >
          {data.length}
        </NotificationsLabel>
      </Box>
      <Box sx={{ mt: 3 }}>
        {data.map((item) => (
          <Typography
            variant="body2"
            sx={{ fontSize: '14px', color: theme.colors.mainText, mb: 3 }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Paper>
  );
};
