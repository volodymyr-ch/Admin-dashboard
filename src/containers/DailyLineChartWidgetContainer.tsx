import { DailyLineChartWidget } from 'components/DailyLineChartWidget';
import { useGetDailyStatisticsQuery } from 'entities/api/dailyStatisticsApi';
import { useState } from 'react';

export const DailyLineChartWidgetContainer = () => {
  const { data: statistics } = useGetDailyStatisticsQuery();
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return show && statistics ? (
    <DailyLineChartWidget
      title={
        <span>
          Daily <b>Line Chart</b>
        </span>
      }
      data={statistics}
      onClose={handleClose}
    />
  ) : null;
};
