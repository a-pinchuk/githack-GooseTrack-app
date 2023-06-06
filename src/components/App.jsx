import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';

import { PublicRoute } from '../components/AuthRoutes/PublicRoute';
import { PrivateRoute } from '../components/AuthRoutes/PrivateRoute';

import MainPage from 'pages/MainPage/MainPage';
import { CalendarPage } from './CalendarPage/CalendarPage';
import UserForm from './UserForm/UserForm';

import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';

import { Header } from './Header/Header';

// const Layout = lazy(() => import('../components/Layout/Layout'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ChoosedDay = lazy(() => import('../components/ChoosedDay/ChoosedDay'));
const ChoosedMonth = lazy(() => import('./ChoosedMonth/ChoosedMonth'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <h2>Loading...</h2>
  ) : (
    <Suspense>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route index element={<MainPage />}/>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="account" element={<UserForm />} />
          <Route path="calendar" element={<CalendarPage />}>
            <Route path="month/:currentDate" element={<ChoosedMonth />} />
            <Route path="day/:currentDay" element={<ChoosedDay />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
