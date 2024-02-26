import { Box } from '@mui/material';
import { DatePickerWidget } from 'components/DatePickerWidget';
import { NotificationsWidget } from 'components/NotificationsWidget';
import { TasksWidget } from 'components/TasksWidget';
import { response as notifications } from 'mocks/notifications';
import { response } from 'mocks/tasks';
import { useState } from 'react';
import { Task } from 'types';

export const TasksVsNotificationContainer = () => {
  const [data, setData] = useState<Task[]>(response);

  const handleCompleteChange = (id: number, value: boolean) => {
    setData((prev) => prev.map((task) => (task.id === id ? { ...task, completed: value } : task)));
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: '1fr 1fr',
          xl: '1fr',
        },
        gap: '40px',
      }}
    >
      <DatePickerWidget />
      <TasksWidget title={"Today's Tasks"} data={data} onCompletedChange={handleCompleteChange} />
      <NotificationsWidget title="Notifications" data={notifications} />
    </Box>
  );
};