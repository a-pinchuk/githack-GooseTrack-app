import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '../../redux/auth/operations'; // Импорт вашего thunk
import { selectUser } from 'redux/auth/selectors';

import { SideBar } from 'components/SideBar/SideBar';
import { Header } from 'components/Header/Header';

import {
  Container,
  Main,
  WrapLeftColumn,
  WrapRightColumn,
} from './MainLayout.styled';

const MainLayout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user.email) return;
    dispatch(updateUserInfo);
  }, [user.email, dispatch]);

  return (
    <Container>
      <Main>
        <WrapLeftColumn>
          <SideBar />
        </WrapLeftColumn>
        <WrapRightColumn>
          <Header />
          <Outlet />
        </WrapRightColumn>
      </Main>
    </Container>
  );
};

export default MainLayout;
