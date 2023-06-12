import React, { useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { useTour } from '@reactour/tour';

import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';
import { CalendarContainer } from './CalendarPage.styled';

const CalendarPage = ({ setStep }) => {
  const navigate = useNavigate();
  const { setIsOpen } = useTour();

  const startTour = () => {
    setStep(0);
    //navigate(`/calendar/day/${moment().format('YYYY-MM-DD')}`);
    setIsOpen(true);
    console.log('start Tour begin');
  };
  const { currentDay, currentDate } = useParams();
  const { pathname } = useLocation();
  const typeSelect = pathname.includes('/calendar/day') ? 'day' : 'month';

  const workDate = currentDate || currentDay;

  useEffect(() => {
    if (pathname === '/calendar' || pathname === '/calendar/') {
      navigate(`/calendar/month/${moment().format('YYYY-MM-DD')}`);
    }
  }, [pathname, navigate]);

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
    // navigate(`/calendar/month/${moment().format('YYYY-MM-DD')}`);
    navigate(`/calendar/month/${workDate}`);
  };

  const typeDayHendler = () => {
    navigate(`/calendar/day/${moment().format('YYYY-MM-DD')}`);
  };

  return (
    <CalendarContainer>
      <CalendarToolbar
        today={moment(workDate)}
        typeSelect={typeSelect}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        typeMonthHendler={typeMonthHendler}
        typeDayHendler={typeDayHendler}
        startTour={startTour}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </CalendarContainer>
  );
};

export default CalendarPage;
