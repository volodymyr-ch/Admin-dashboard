import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import { FC } from 'react';
import theme from 'theme';
import { Revenue } from 'types';

type Props = {
  chartData: Revenue;
};

export const PieChart: FC<Props> = ({ chartData }) => {
  const options = {
    chart: {
      type: 'pie',
      height: 150,
    },
    title: { text: null },
    credits: { enabled: false },
    accessibility: { point: { valueSuffix: '%' } },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0,
      borderRadius: 0,
      itemHiddenStyle: {
        'text-transform': 'none',
      },
      squareSymbol: true,
    },
    plotOptions: {
      pie: {
        showInLegend: true,
        innerSize: '60%',
        dataLabels: {
          enabled: false,
        },
        states: { hover: { enabled: true, halo: 0 } },
      },
    },
    colors: [theme.colors.red, '#ebb834', theme.colors.primary],
    series: [{ data: chartData }],
  };

  return (
    <div style={{ margin: '0 -20px -30px' }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
