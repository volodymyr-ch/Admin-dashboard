import { LineChart } from 'components/LineChart';
import { SingleWidget } from 'components/SingleWidget';
import React, { FC } from 'react';
import { DailyLineChartWidgetResponse } from 'types';

type Props = {
  title: React.ReactNode;
  data: DailyLineChartWidgetResponse;
  onClose: () => void;
};

export const DailyLineChartWidget: FC<Props> = ({ title, data, onClose }) => (
  <SingleWidget title={title} onClose={onClose}>
    <LineChart chartData={data} />
  </SingleWidget>
);
