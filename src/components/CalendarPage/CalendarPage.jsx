import React, { useEffect, useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { useNavigate } from 'react-router';
import moment from 'moment';

import { TemporaryHeaderCalendar } from './TemporaryHeaderCalendar';

import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTasks } from 'redux/task/operations';
import { selectAllTasks } from 'redux/task/selectors';

// import { selectIsLoggedIn } from 'redux/auth/selectors';

const CalendarPage = () => {
  const [today, setToday] = useState(moment());
  //console.log('CalendarPage ~ today:', today.format('YYYY-MM-DD'));
  const [typeSelect, setTypeSelect] = useState('month');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector(selectAllTasks);
  // console.log('CalendarPage ~ tasks:', tasks);
  // const error = useSelector(selectTasksError);
  // console.log('CalendarPage ~ error:', error);
  // const user = useSelector(selectIsLoggedIn);
  // console.log('CalendarPage ~ user:', user);

  useEffect(() => {
    navigate(`/calendar/month/${moment().format('YYYY-MM-DD')}`);
    if (tasks.length === 0) {
      dispatch(fetchAllTasks());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

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
    setTypeSelect('month');
    navigate(`/calendar/month/${moment().format('YYYY-MM-DD')}`);
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
        // display: 'flex',
      }}
    >
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
