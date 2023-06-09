import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { clearTasks } from 'redux/task/operations';
import { LogOutBtnStyled, LogOutIconStyled } from './LogoutBtn.styled';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    dispatch(clearTasks());
  };

  return (
    <LogOutBtnStyled type="submit" onClick={handleLogout}>
      Logout
      <LogOutIconStyled></LogOutIconStyled>
    </LogOutBtnStyled>
  );
};

export default LogoutBtn;
