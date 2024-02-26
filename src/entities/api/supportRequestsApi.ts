import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SupportRequestsResponse } from 'types';
import { API_URL } from 'utils/constants';

const supportRequestsApi = createApi({
  reducerPath: 'supportRequestsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getSupportRequests: builder.query<SupportRequestsResponse[], void>({
      query: () => 'supportRequests',
    }),
  }),
});

export const { useGetSupportRequestsQuery } = supportRequestsApi;

export default supportRequestsApi;
