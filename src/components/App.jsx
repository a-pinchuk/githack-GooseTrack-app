import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { PublicRoute } from '../components/AuthRoutes/PublicRoute';
import { PrivateRoute } from '../components/AuthRoutes/PrivateRoute';
import MainPage from 'pages/MainPage/MainPage';
import UserForm from './UserForm/UserForm';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { currentUser } from 'redux/auth/operations';
import { Loader } from './Loader/Loader';
import { useSearchParams } from 'react-router-dom/dist';
import { updateAccessToken } from 'redux/auth/authSlice';

import { StyledTourProvider } from 'helpers/TourProvider/StyledTourProvider.styled';
//import { steps, useSteps } from 'helpers/TourProvider/steps';

const CalendarPage = lazy(() => import('./CalendarPage/CalendarPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const PasswordPage = lazy(() =>
  import('pages/PasswordRecoveryPage/PasswordPage')
);
const PasswordRecoveryPage = lazy(() =>
  import('pages/PasswordRecoveryPage/PasswordRecoveryPage')
);
const ChoosedDay = lazy(() => import('../components/ChoosedDay/ChoosedDay'));
const ChoosedMonth = lazy(() => import('./ChoosedMonth/ChoosedMonth'));
const MainLayout = lazy(() => import('./MainLayout/MainLayout'));
const steps = [
  {
    // selector: '.first-step',
    selector: '[data-tour="1"]',
    content: 'Hello! You are on this tab',
  },
  {
    selector: '[data-tour="2"]',
    content: 'Select the "Day" tab to navigate to the days',
  },
  {
    selector: '[data-tour="3"]',
    content:
      'You can also change months or days backwards by clicking "<" or forwards by clicking ">"',
  },
  {
    selector: '[data-tour="4"]',
    content: 'You can also immediately jump to the day of the selected month',
  },
  {
    selector: '[data-tour="5"]',
    content:
      'Next, you can choose what type of task you want to create, p.s. if you swipe left, another type will open)',
  },
  {
    selector: '[data-tour="6"]',
    content: 'Click on "Add task" to create a task',
  },
  {
    selector: '[data-tour="7"]',
    content:
      'Enter the required text and finally create the task! Now it will always be here. Enjoy it and have a good day!',
  },
];
export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const [searchParams] = useSearchParams();

  //test
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const setCurrentStep = step => {
    switch (step) {
      case 4:
        const currentDay = '2023-06-13';
        navigate(`/calendar/day/${currentDay}`);
        break;
      default:
        break;
    }

    setStep(step);
  };
  //test

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');

    if (accessToken) {
      dispatch(updateAccessToken(accessToken));
    }

    if (refreshToken) {
      localStorage.setItem('refreshToken', refreshToken);
    }
    dispatch(currentUser());
  }, [dispatch, searchParams]);

  return (
    <StyledTourProvider
      steps={steps}
      currentStep={step}
      setCurrentStep={setCurrentStep}
    >
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<MainPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="password" element={<PasswordPage />} />
            <Route
              path="reset-password/:token"
              element={<PasswordRecoveryPage />}
            />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<MainLayout />}>
              <Route path="account" element={<UserForm />} />
              <Route
                path="calendar"
                element={<CalendarPage setStep={setStep} />}
              >
                <Route path="month/:currentDate" element={<ChoosedMonth />} />
                <Route path="day/:currentDay" element={<ChoosedDay />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
      {isRefreshing && <Loader />}
    </StyledTourProvider>
  );
};
