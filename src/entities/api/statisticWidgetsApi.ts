import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { StatisticWidgetsResponse } from 'types';
import { API_URL } from 'utils/constants';

const statisticWidgetsApi = createApi({
  reducerPath: 'statisticWidgetsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getStatisticWidgets: builder.query<StatisticWidgetsResponse, void>({
      query: () => 'statisticWidgets',
    }),
  }),
});

export const { useGetStatisticWidgetsQuery } = statisticWidgetsApi;

export default statisticWidgetsApi;
