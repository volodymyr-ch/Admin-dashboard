import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Paper } from 'components/Paper';
import dayjs from 'dayjs';
import { FC } from 'react';

export const DatePickerWidget: FC = () => (
  <Paper styles={{ padding: 0 }}>
    <DateCalendar defaultValue={dayjs('2024-02-26')} />
  </Paper>
);
