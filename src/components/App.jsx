import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense, useEffect } from 'react';
import { PublicRoute } from '../components/AuthRoutes/PublicRoute';
import { PrivateRoute } from '../components/AuthRoutes/PrivateRoute';
import MainPage from 'pages/MainPage/MainPage';
import UserForm from './UserForm/UserForm';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { currentUser } from 'redux/auth/operations';
import { Loader } from './Loader/Loader';

const CalendarPage = lazy(() => import('./CalendarPage/CalendarPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const PasswordRecoveryPage = lazy(() =>
  import('pages/PasswordRecoveryPage/PasswordRecoveryPage')
);
const ChoosedDay = lazy(() => import('../components/ChoosedDay/ChoosedDay'));
const ChoosedMonth = lazy(() => import('./ChoosedMonth/ChoosedMonth'));
const MainLayout = lazy(() => import('./MainLayout/MainLayout'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<MainPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="password" element={<PasswordRecoveryPage />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<MainLayout />}>
              <Route path="account" element={<UserForm />} />
              <Route path="calendar" element={<CalendarPage />}>
                <Route path="month/:currentDate" element={<ChoosedMonth />} />
                <Route path="day/:currentDay" element={<ChoosedDay />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
      {isRefreshing && <Loader />}
    </>
  );
};
