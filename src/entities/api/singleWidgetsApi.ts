import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SingleWidgetsResponse } from 'types';
import { API_URL } from 'utils/constants';

const singleWidgetsApi = createApi({
  reducerPath: 'singleWidgetsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getSingleWidgets: builder.query<SingleWidgetsResponse, void>({
      query: () => 'singleWidgets',
    }),
  }),
});

export const { useGetSingleWidgetsQuery } = singleWidgetsApi;

export default singleWidgetsApi;
