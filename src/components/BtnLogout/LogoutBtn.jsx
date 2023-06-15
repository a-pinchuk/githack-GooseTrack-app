import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { logOut } from '../../redux/auth/operations';
import { clearTasks } from 'redux/task/operations';
import { LogOutBtnStyled, LogOutIconStyled } from './LogoutBtn.styled';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleLogout = () => {
    dispatch(logOut());
    dispatch(clearTasks());
  };

  return (
    <LogOutBtnStyled type="submit" onClick={handleLogout}>
      {t('sidebar.logout')}
      <LogOutIconStyled></LogOutIconStyled>
    </LogOutBtnStyled>
  );
};

export default LogoutBtn;
