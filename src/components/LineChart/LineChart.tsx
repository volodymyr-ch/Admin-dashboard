import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import { FC } from 'react';
import theme from 'theme';
import { DailyLineChartWidgetResponse } from 'types';

type Props = {
  chartData: DailyLineChartWidgetResponse;
};

export const LineChart: FC<Props> = ({ chartData }) => {
  const options = {
    title: { text: null },
    legend: { verticalAlign: 'top' },
    yAxis: { title: { text: null } },
    xAxis: {
      type: 'datetime',
      lineColor: theme.colors.progressBarBackground,
      tickColor: theme.colors.progressBarBackground,
      dateTimeLabelFormats: { month: '%e. %b', year: '%b' },
    },
    tooltip: {
      headerFormat: '{point.x:%A, %e %b, %H:%M}<br>',
      pointFormat: '<b>{series.name} at {point.y:.2f}</b>',
      borderWidth: 2,
    },
    plotOptions: { series: { marker: { enabled: false } }, area: { color: theme.colors.blue } },
    colors: [theme.colors.primary, theme.colors.yellow, theme.colors.primary],
    credits: { enabled: false },
    series: chartData,
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
