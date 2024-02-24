import React, { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Analytics, Dashboard, Users, NotFound } from 'pages';
import { Layout } from 'layout';

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
