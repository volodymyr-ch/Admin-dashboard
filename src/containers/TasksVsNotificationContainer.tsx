import { Box } from '@mui/material';
import { DatePickerWidget } from 'components/DatePickerWidget';
import { NotificationsWidget } from 'components/NotificationsWidget';
import { TasksWidget } from 'components/TasksWidget';
import { useGetNotificationsQuery } from 'entities/api/notificationsApi';
import { useGetTasksQuery } from 'entities/api/tasksApi';
import { useEffect, useState } from 'react';
import { Task } from 'types';
import { Skeleton } from './Skeleton';

export const TasksVsNotificationContainer = () => {
  const { data: tasks, isLoading: tasksLoading } = useGetTasksQuery();
  const { data: notifications, isLoading: notificationsLoading } = useGetNotificationsQuery();
  const [data, setData] = useState<Task[]>([]);

  useEffect(() => {
    if (tasks) {
      setData(tasks);
    }
  }, [tasks]);

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
      <Skeleton show={!data.length && tasksLoading} styles={{ minHeight: '430px' }}>
        {data.length ? (
          <TasksWidget
            title={"Today's Tasks"}
            data={data}
            onCompletedChange={handleCompleteChange}
          />
        ) : null}
      </Skeleton>
      <Skeleton show={!notifications && notificationsLoading} styles={{ minHeight: '290px' }}>
        {notifications ? <NotificationsWidget title="Notifications" data={notifications} /> : null}
      </Skeleton>
    </Box>
  );
};
