import React, { useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import LogoutBtn from 'components/TestBtnLogout/LogoutBtn';
import { useNavigate, useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

import { TemporaryHeaderCalendar } from './TemporaryHeaderCalendar';

import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTasks } from 'redux/task/operations';
import { selectAllTasks } from 'redux/task/selectors';

const CalendarPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentDay, currentDate } = useParams();
  const { pathname } = useLocation();
  const typeSelect = pathname.includes('/calendar/day') ? 'day' : 'month';

  const workDate = currentDate || currentDay;

  // * Task
  const tasks = useSelector(selectAllTasks);

  useEffect(() => {
    if (pathname === '/calendar') {
      navigate(`/calendar/month/${moment().format('YYYY-MM-DD')}`);
    }
  }, [pathname, navigate]);

  useEffect(() => {
    if (tasks.length === 0) {
      // ! Якщо змінився місяць то треба фетчити таски
      //Винести в окремий
      dispatch(fetchAllTasks());
    }
  }, [dispatch, tasks]);

  const todayHandler = () => {
    // Перейти на день
    console.log('Перейти на день');
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
    navigate(`/calendar/month/${moment().format('YYYY-MM-DD')}`);
  };

  const typeDayHendler = () => {
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
        today={moment(workDate)}
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
