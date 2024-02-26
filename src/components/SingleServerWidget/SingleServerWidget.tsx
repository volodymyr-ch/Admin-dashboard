import { Box, Typography, useTheme } from '@mui/material';
import { SingleWidget } from 'components/SingleWidget';
import React, { FC } from 'react';
import { ServerOverView } from 'types';

import { ReactComponent as BlueServerIcon } from 'svg/blue.svg';
import { ReactComponent as RedServerIcon } from 'svg/red.svg';
import { ReactComponent as YellowServerIcon } from 'svg/yellow.svg';

const iconsDictionary = [<RedServerIcon />, <BlueServerIcon />, <YellowServerIcon />];

type Props = {
  title: React.ReactNode;
  data: ServerOverView;
  onClose: () => void;
};

export const SingleServerWidget: FC<Props> = ({ title, data, onClose }) => {
  const theme = useTheme();

  return (
    <SingleWidget title={title} onClose={onClose}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          mt: 2,
        }}
      >
        {data.map((item, index) => (
          <Box
            key={item.percentages}
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              '&:not(:last-child)': {
                mb: 2,
              },
            }}
          >
            <Typography variant="body2" sx={{ fontSize: '12px', color: theme.colors.mainText }}>
              {item.percentages}% / {item.temperature}°С / {item.ghz} Ghz
            </Typography>
            {iconsDictionary[index]}
          </Box>
        ))}
      </Box>
    </SingleWidget>
  );
};
