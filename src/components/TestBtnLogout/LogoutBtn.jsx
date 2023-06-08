import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations'; // Укажите правильный путь к вашему файлу с операциями
import { LogOutBtnStyled, LogOutIconStyled } from './LogoutBtn.styled';
// import { ReactComponent as LogOutIcon } from '../../images/sideBar/log-out.svg';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <LogOutBtnStyled type="submit" onClick={handleLogout}>
      Logout
      <LogOutIconStyled></LogOutIconStyled>
    </LogOutBtnStyled>
  );
};

export default LogoutBtn;
