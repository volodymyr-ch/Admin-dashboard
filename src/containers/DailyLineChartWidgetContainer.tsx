import { DailyLineChartWidget } from 'components/DailyLineChartWidget';
import { response } from 'mocks/dailyLineChartWidgetResponse';
import { useState } from 'react';

export const DailyLineChartWidgetContainer = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return show ? (
    <DailyLineChartWidget
      title={
        <span>
          Daily <b>Line Chart</b>
        </span>
      }
      data={response}
      onClose={handleClose}
    />
  ) : null;
};
