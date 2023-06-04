import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { PublicRoute } from '../components/AuthRoutes/PublicRoute';
import { PrivateRoute } from '../components/AuthRoutes/PrivateRoute';

import MainPage from 'pages/MainPage/MainPage';
import { Modal } from './Modal/Modal';
import TaskModal from './TaskModal/TaskModal';

const Layout = lazy(() => import('../components/Layout/Layout'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));

export const App = () => {
  return (
    <>
      <TaskModal> </TaskModal>
    </>
    // <Suspense>
    //   <Routes>
    //     <Route path="/" element={<PublicRoute />}>
    //       {/* <Route index element={<Navigate to="home" />} /> */}
    //       <Route index element={<MainPage />} />
    //       {/* <Route path="home" element={<MainPage />} /> */}
    //       <Route path="register" element={<RegisterPage />} />
    //       <Route path="login" element={<LoginPage />} />
    //     </Route>
    //     <Route path="/" element={<PrivateRoute />}>
    //       <Route
    //         index
    //         element={<Navigate to="/calendar/month/:currentDate" replace />}
    //       />
    //       <Route path="account" element={<Layout />} />
    //       <Route path="calendar" element={<Layout />}>
    //         <Route
    //           index
    //           element={<Navigate to="/calendar/month/:currentDate" replace />}
    //         />
    //         <Route path="month/:currentDate" element={<Layout />} />
    //         <Route path="day/:currentDay" element={<Layout />} />
    //       </Route>
    //     </Route>
    //   </Routes>
    // </Suspense>
  );
};
