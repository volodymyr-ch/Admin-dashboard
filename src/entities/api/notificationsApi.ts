import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NotificationsItem } from 'types';
import { API_URL } from 'utils/constants';

const notificationsApi = createApi({
  reducerPath: 'notificationsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getNotifications: builder.query<NotificationsItem[], void>({
      query: () => 'notifications',
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationsApi;

export default notificationsApi;

