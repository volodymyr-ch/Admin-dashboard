import { DailyLineChartWidget } from 'components/DailyLineChartWidget';
import { useGetDailyStatisticsQuery } from 'entities/api/dailyStatisticsApi';
import { useState } from 'react';
import { Skeleton } from './Skeleton';

export const DailyLineChartWidgetContainer = () => {
  const { data: statistics, isLoading } = useGetDailyStatisticsQuery();
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return show ? (
    <Skeleton show={!statistics && isLoading} styles={{ minHeight: '430px' }}>
      {statistics ? (
        <DailyLineChartWidget
          title={
            <span>
              Daily <b>Line Chart</b>
            </span>
          }
          data={statistics}
          onClose={handleClose}
        />
      ) : null}
    </Skeleton>
  ) : null;
};
