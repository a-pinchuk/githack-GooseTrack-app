import React, { useEffect, Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';
import { CalendarContainer } from './CalendarPage.styled';
import { TourProvider } from '@reactour/tour';
import { steps } from 'helpers/TourProvider/steps';
import { Loader } from 'components/Loader/Loader';

const CalendarPage = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);

  const { currentDay, currentDate } = useParams();
  const { pathname } = useLocation();
  const typeSelect = pathname.includes('/calendar/day') ? 'day' : 'month';

  const workDate = currentDate || currentDay;

  useEffect(() => {
    if (pathname === '/calendar' || pathname === '/calendar/') {
      navigate(`/calendar/month/${moment().format('YYYY-MM-DD')}`);
    }
  }, [pathname, navigate]);

  useEffect(() => {
    const hasVisitedTour = localStorage.getItem('visitedTour');
    if (!hasVisitedTour) {
      localStorage.setItem('visitedTour', 'false');
    }
  }, []);

  const prevHandler = () => {
    navigate(
      `/calendar/${typeSelect}/${moment(workDate)
        .subtract(1, typeSelect)
        .format('YYYY-MM-DD')}`
    );
  };

  const nextHandler = () => {
    navigate(
      `/calendar/${typeSelect}/${moment(workDate)
        .add(1, typeSelect)
        .format('YYYY-MM-DD')}`
    );
  };

  const typeMonthHendler = () => {
    navigate(`/calendar/month/${workDate}`);
  };

  const typeDayHendler = () => {
    navigate(`/calendar/day/${moment().format('YYYY-MM-DD')}`);
  };

  const isDesktop = window.innerWidth >= 1440;

  return (
    <TourProvider
      steps={steps}
      currentStep={step}
      setCurrentStep={() => {
        if (step === 3 && !currentDay) {
          navigate(`/calendar/day/${moment().format('YYYY-MM-DD')}`);
          setTimeout(() => {
            setStep(step + 1);
          }, 1000);
        } else {
          setStep(step + 1);
        }
      }}
      prevButton={({ Button }) => {
        return (
          <Button
            onClick={() => {
              setStep(step - 1);
            }}
            kind="prev"
          ></Button>
        );
      }}
      styles={{
        popover: base => ({
          ...base,
          '--reactour-accent': '#3E85F3',
          borderRadius: 8,
          maxWidth: isDesktop ? 640 : 350,
          top: step === 1 ? 70 : 20,
          left: isDesktop ? (step === 1 ? -160 : -50) : 0,
          color: props => props.theme.colors.primary_text_mode,
        }),
        maskArea: base => ({ ...base, rx: 8 }),
        maskWrapper: base => ({ ...base, color: '#504d4d' }),
        badge: base => ({ ...base, left: '-0.8125em', right: 'auto' }),
        controls: base => ({ ...base, marginTop: 10 }),
        close: base => ({ ...base, right: 8, left: 'auto', top: 8 }),
      }}
    >
      <CalendarContainer>
        <CalendarToolbar
          today={moment(workDate)}
          typeSelect={typeSelect}
          prevHandler={prevHandler}
          nextHandler={nextHandler}
          typeMonthHendler={typeMonthHendler}
          typeDayHendler={typeDayHendler}
          setStep={setStep}
        />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </CalendarContainer>
    </TourProvider>
  );
};

export default CalendarPage;
