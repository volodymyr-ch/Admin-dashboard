import { Layout } from 'layout';
import { Analytics, Dashboard, Email, Grid, NotFound, Users } from 'pages';
import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { RoutePath } from './types';

const routes = [
  { path: RoutePath.home, element: <Navigate to={RoutePath.analytics} /> },
  { path: RoutePath.app, element: <Navigate to={RoutePath.analytics} /> },
  { path: RoutePath.main, element: <Navigate to={RoutePath.analytics} /> },
  {
    path: RoutePath.analytics,
    element: (
      <Layout>
        <Analytics />
      </Layout>
    ),
  },
  {
    path: RoutePath.dashboard,
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
  {
    path: RoutePath.users,
    element: (
      <Layout>
        <Users />
      </Layout>
    ),
  },
  {
    path: RoutePath.email,
    element: (
      <Layout>
        <Email />
      </Layout>
    ),
  },
  {
    path: RoutePath.grid,
    element: (
      <Layout>
        <Grid />
      </Layout>
    ),
  },
  { path: RoutePath.notFound, element: <NotFound /> },
];

export const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  </BrowserRouter>
);
