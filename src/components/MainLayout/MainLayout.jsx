import React, { useEffect, useState } from 'react';
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
  LeftField,
} from './MainLayout.styled';

const MainLayout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {
    if (user.email) return;
    dispatch(updateUserInfo);
  }, [user.email, dispatch]);

  const toogleShowSiderBar = (status = null) => {
    if (status === null) {
      setShowSideBar(prev => !prev);
    } else {
      setShowSideBar(status);
    }
  };

  return (
    <Container>
      <Main>
        <WrapLeftColumn showSideBar={showSideBar}>
          <LeftField />
          <SideBar toogleShowSiderBar={toogleShowSiderBar} />
        </WrapLeftColumn>

        <WrapRightColumn>
          <Header toogleShowSiderBar={toogleShowSiderBar} />
          <Outlet />
        </WrapRightColumn>
      </Main>
    </Container>
  );
};

export default MainLayout;
