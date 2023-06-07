import React, { useEffect, useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import LogoutBtn from 'components/TestBtnLogout/LogoutBtn';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

import { TemporaryHeaderCalendar } from './TemporaryHeaderCalendar';
import TestModalDelete from 'components/TestModalDelete/TestModalDelete';

import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTasks } from 'redux/task/operations';
import { selectAllTasks } from 'redux/task/selectors';

const CalendarPage = () => {
  const [today, setToday] = useState(moment());
  //console.log('CalendarPage ~ today:', today.format('YYYY-MM-DD'));
  const [typeSelect, setTypeSelect] = useState('month');
  console.log('CalendarPage ~ typeSelect:', typeSelect);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const tasks = useSelector(selectAllTasks);

  const pathWithoutDate = pathname.slice(0, pathname.lastIndexOf('/'));

  useEffect(() => {
    if (pathname === '/calendar') {
      navigate(`/calendar/month/${moment().format('YYYY-MM-DD')}`);
    }
    // if (pathWithoutDate === '/calendar/day') {
    //   setTypeSelect('day');
    // }

    if (tasks.length === 0) {
      dispatch(fetchAllTasks());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    if (pathWithoutDate === '/calendar/day') {
      setTypeSelect('day');
    }
  }, [pathWithoutDate]);

  //const startDay = today.clone().startOf('month').startOf('week');
  // console.log('CalendarPage ~ startDay:', startDay);
  //const endDay = today.clone().endOf('month').endOf('week');

  const todayHandler = () => {
    setToday(moment());
  };

  const prevHandler = () => {
    if (typeSelect === 'month') {
      setToday(prev => {
        const prevMonth = prev.clone().subtract(1, 'month');
        navigate(`/calendar/month/${prevMonth.format('YYYY-MM-DD')}`);
        return prevMonth;
      });
      return;
    }
    setToday(prev => {
      const prevDay = prev.clone().subtract(1, 'day');
      navigate(`/calendar/day/${prevDay.format('YYYY-MM-DD')}`);
      return prevDay;
    });
  };

  const nextHandler = () => {
    if (typeSelect === 'month') {
      setToday(prev => {
        const nextMonth = prev.clone().add(1, 'month');
        navigate(`/calendar/month/${nextMonth.format('YYYY-MM-DD')}`);
        return nextMonth;
      });
      return;
    }
    setToday(prev => {
      const nextDay = prev.clone().add(1, 'day');
      navigate(`/calendar/day/${nextDay.format('YYYY-MM-DD')}`);
      return nextDay;
    });
  };

  const typeMonthHendler = () => {
    const desiredPath = `/calendar/month/${moment().format('YYYY-MM-DD')}`;
    if (pathname !== desiredPath) {
      setTypeSelect('month');
      navigate(desiredPath);
    }
  };

  const typeDayHendler = () => {
    setTypeSelect('day');
    navigate(`/calendar/day/${moment().format('YYYY-MM-DD')}`);
  };
  return (
    <div
      style={{
        marginLeft: '32px',
        marginRight: '32px',
      }}
    >
      <LogoutBtn />

      <TestModalDelete />

      <TemporaryHeaderCalendar />
      <CalendarToolbar
        today={today}
        typeSelect={typeSelect}
        todayHandler={todayHandler}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        typeMonthHendler={typeMonthHendler}
        typeDayHendler={typeDayHendler}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default CalendarPage;
