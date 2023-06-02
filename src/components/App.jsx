import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { PublicRoute } from '../components/AuthRoutes/PublicRoute';
import { PrivateRoute } from '../components/AuthRoutes/PrivateRoute';

const Layout = lazy(() => import('../components/Layout/Layout'));

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Layout />} />
          <Route path="register" element={<Layout />} />
          <Route path="login" element={<Layout />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route
            index
            element={<Navigate to="/calendar/month/:currentDate" replace />}
          />
          <Route path="account" element={<Layout />} />
          <Route path="calendar" element={<Layout />}>
            <Route
              index
              element={<Navigate to="/calendar/month/:currentDate" replace />}
            />
            <Route path="month/:currentDate" element={<Layout />} />
            <Route path="day/:currentDay" element={<Layout />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
