import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations'; // Укажите правильный путь к вашему файлу с операциями
import { LogOutBtnStyled } from './LogoutBtn.styled';
import { ReactComponent as LogOutIcon } from '../../images/sideBar/log-out.svg';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <LogOutBtnStyled type="submit" onClick={handleLogout}>
      Logout
      <LogOutIcon style={{ marginLeft: '13.5px' }}></LogOutIcon>
    </LogOutBtnStyled>
  );
};

export default LogoutBtn;
