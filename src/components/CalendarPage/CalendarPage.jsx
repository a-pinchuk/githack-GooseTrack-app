// import React, { useEffect, useState } from 'react';
import LogoutBtn from 'components/TestBtnLogout/LogoutBtn';
import { TemporaryHeaderCalendar } from './TemporaryHeaderCalendar';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectAllTasks } from 'redux/task/selectors';
//import {} from './CalendarPage.styled';
import TestModalDelete from 'components/TestModalDelete/TestModalDelete';

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
      <TestModalDelete />
    </div>
  );
};
