import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Task } from 'types';
import { API_URL } from 'utils/constants';

const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => 'tasks',
    }),
  }),
});

export const { useGetTasksQuery } = tasksApi;

export default tasksApi;

