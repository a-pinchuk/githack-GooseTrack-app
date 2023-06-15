import React, { useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';
import { CalendarContainer } from './CalendarPage.styled';

const CalendarPage = () => {
  const navigate = useNavigate();

  const { currentDay, currentDate } = useParams();
  const { pathname } = useLocation();
  const typeSelect = pathname.includes('/calendar/day') ? 'day' : 'month';

  const workDate = currentDate || currentDay;

  useEffect(() => {
    if (pathname === '/calendar' || pathname === '/calendar/') {
      navigate(`/calendar/month/${moment().format('YYYY-MM-DD')}`);
    }
  }, [pathname, navigate]);

  const todayHandler = () => {
    // Перейти на день
    // console.log('Перейти на день');
    // setToday(moment());
  };

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
  const { t } = useTranslation();

  return (
    <CalendarContainer>
      <CalendarToolbar
        today={moment(workDate)}
        typeSelect={typeSelect}
        todayHandler={todayHandler}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        typeMonthHendler={typeMonthHendler}
        typeDayHendler={typeDayHendler}
      />
      <Suspense fallback={<div>{t('loading.load')}</div>}>
        <Outlet />
      </Suspense>
    </CalendarContainer>
  );
};

export default CalendarPage;
