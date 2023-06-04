// import React, { useEffect, useState } from 'react';
import { TemporaryHeaderCalendar } from './TemporaryHeaderCalendar';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectAllTasks } from 'redux/task/selectors';
import LogoutBtn from 'components/TestBtnLogout/LogoutBtn';
//import {} from './CalendarPage.styled';

export const CalendarPage = () => {
  return (
    <div
      style={{
        marginLeft: '32px',
        marginRight: '32px',
      }}
    >
      <TemporaryHeaderCalendar />
      <LogoutBtn />
    </div>
  );
};
