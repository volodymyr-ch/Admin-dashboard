import { Skeleton as SkeletonMui } from '@mui/material';
import { Paper } from 'components/Paper';
import { FC, ReactElement, ReactNode } from 'react';

type SkeletonProps = {
  // TODO: add type for the container
  // type: 'tasks' | 'notifications' | 'dailyLineChart' | 'supportRequests' | 'statisticWidgets';
  show: boolean;
  children: ReactNode;
  styles?: Record<string, string | number>;
};
export const Skeleton: FC<SkeletonProps> = ({ show, children, styles }) => {
  if (!show) {
    return children as ReactElement;
  }

  // TODO: render skeleton for each container based on the type in props
  return (
    <Paper styles={styles}>
      <SkeletonMui sx={{ mb: 2 }} variant="rounded" width="50%" height={30} />
      <SkeletonMui sx={{ mb: 2 }} variant="rounded" width="100%" height={30} />
      <SkeletonMui sx={{ mb: 2 }} variant="rounded" width="100%" height={20} />
      <SkeletonMui sx={{ mb: 2 }} variant="rounded" width="100%" height={20} />
    </Paper>
  );
};
