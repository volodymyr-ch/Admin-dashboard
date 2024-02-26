import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DailyLineChartWidgetResponse } from 'types';
import { API_URL } from 'utils/constants';

const dailyStatisticsApi = createApi({
  reducerPath: 'dailyStatisticsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getDailyStatistics: builder.query<DailyLineChartWidgetResponse, void>({
      query: () => 'dailyStatistics',
    }),
  }),
});

export const { useGetDailyStatisticsQuery } = dailyStatisticsApi;

export default dailyStatisticsApi;
