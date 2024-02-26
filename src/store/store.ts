import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import dailyStatisticsApi from 'entities/api/dailyStatisticsApi';
import notificationsApi from 'entities/api/notificationsApi';
import singleWidgetsApi from 'entities/api/singleWidgetsApi';
import statisticWidgetsApi from 'entities/api/statisticWidgetsApi';
import supportRequestsApi from 'entities/api/supportRequestsApi';
import tasksApi from 'entities/api/tasksApi';

export const store = configureStore({
  reducer: {
    [dailyStatisticsApi.reducerPath]: dailyStatisticsApi.reducer,
    [singleWidgetsApi.reducerPath]: singleWidgetsApi.reducer,
    [statisticWidgetsApi.reducerPath]: statisticWidgetsApi.reducer,
    [supportRequestsApi.reducerPath]: supportRequestsApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
    [notificationsApi.reducerPath]: notificationsApi.reducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat([
    dailyStatisticsApi.middleware,
    singleWidgetsApi.middleware,
    statisticWidgetsApi.middleware,
    supportRequestsApi.middleware,
    tasksApi.middleware,
    notificationsApi.middleware,
  ]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
