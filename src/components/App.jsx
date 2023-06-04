import { Route, Routes, Navigate } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

import { PublicRoute } from '../components/AuthRoutes/PublicRoute';
import { PrivateRoute } from '../components/AuthRoutes/PrivateRoute';

import MainPage from 'pages/MainPage/MainPage';
import TaskModal from './TaskModal/TaskModal';
import { CalendarPage } from './CalendarPage/CalendarPage';

const Layout = lazy(() => import('../components/Layout/Layout'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));

export const App = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };
  return (
    <>
      <button onClick={toggleModal}>Open Modal</button>
      {isModalOpen && <TaskModal toggleModal={toggleModal}></TaskModal>}
      <Suspense>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            {/* <Route index element={<Navigate to="home" />} /> */}
            <Route index element={<MainPage />} />
            {/* <Route path="home" element={<MainPage />} /> */}
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route
              index
              element={<Navigate to="/calendar/month/:currentDate" replace />}
            />
            <Route path="account" element={<Layout />} />
            <Route path="calendar" element={<CalendarPage />}>
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
    </>
  );
};
