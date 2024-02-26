import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Typography,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Paper } from 'components/Paper';
import React, { ChangeEvent, FC } from 'react';
import { Task } from 'types';

import Checkbox from '@mui/material/Checkbox';

type Props = {
  title: React.ReactNode;
  data: Task[];
  onCompletedChange: (id: number, value: boolean) => void;
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

export const TasksWidget: FC<Props> = ({ title, data, onCompletedChange }) => {
  const theme = useTheme();

  const list = data.map(({ id, type, completed, title, time }) => (
    <FormControlLabel
      key={id}
      sx={{ mb: 2 }}
      control={
        <Checkbox
          color="success"
          checked={completed}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onCompletedChange(id, e.target.checked)}
          name={`${id}`}
        />
      }
      label={
        <Box>
          <Typography
            variant="body2"
            sx={{
              fontSize: '12px',
              color: theme.colors.secondaryText,
              textDecoration: completed ? 'line-through' : 'initial',
            }}
          >
            {type}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: '14px',
              color: theme.colors.mainText,
              textDecoration: completed ? 'line-through' : 'initial',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: '12px',
              color: theme.colors.secondaryText,
              textDecoration: completed ? 'line-through' : 'initial',
            }}
          >
            {time}
          </Typography>
        </Box>
      }
    />
  ));

  return (
    <Paper styles={{ position: 'relative' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontSize: '18px' }}>
            {title}
          </Typography>
          <Typography variant="h6" sx={{ fontSize: '12px', color: theme.colors.secondaryText }}>
            {data.filter((el) => el.completed).length} of {data.length} completed
          </Typography>
        </Box>
        <NotificationsLabel
          style={{ position: 'absolute', right: '10px', top: '14px', color: theme.colors.white }}
        >
          {data.length}
        </NotificationsLabel>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormGroup>{list}</FormGroup>
        </FormControl>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="text" sx={{}}>
          See All
        </Button>
      </Box>
    </Paper>
  );
};
