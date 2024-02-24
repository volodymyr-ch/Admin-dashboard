import { Layout } from 'layout';
import { Analytics, Dashboard, NotFound, Users } from 'pages';
import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/analytics" />} />
      <Route
        path="/analytics"
        element={
          <Layout>
            <Analytics />
          </Layout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/users"
        element={
          <Layout>
            <Users />
          </Layout>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
