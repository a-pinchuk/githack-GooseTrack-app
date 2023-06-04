import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { logOut } from '../../redux/auth/operations'; // Укажите правильный путь к вашему файлу с операциями

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Button variant="outlined" color="secondary" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutBtn;
