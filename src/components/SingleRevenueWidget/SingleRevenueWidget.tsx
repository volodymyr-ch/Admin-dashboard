import { PieChart } from 'components/PieChart';
import { SingleWidget } from 'components/SingleWidget';
import React, { FC } from 'react';
import { Revenue } from 'types';

type Props = {
  title: React.ReactNode;
  data: Revenue;
  onClose: () => void;
};

export const SingleRevenueWidget: FC<Props> = ({ title, data, onClose }) => (
  <SingleWidget title={title} onClose={onClose}>
    <PieChart chartData={data} />
  </SingleWidget>
);
