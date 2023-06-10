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
} from './MainLayout.styled';

import { useMediaQuery } from 'react-responsive';

const MainLayout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [showSideBar, setShowSideBar] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 1439 });

  useEffect(() => {
    if (user.email) return;
    dispatch(updateUserInfo);
  }, [user.email, dispatch]);

  const toogleShowSiderBar = () => {
    setShowSideBar(prev => !prev);
  };

  return (
    <Container>
      <Main>
        {isMobile ? (
          <WrapLeftColumn showSideBar={showSideBar}>
            <SideBar toogleShowSiderBar={toogleShowSiderBar} />
          </WrapLeftColumn>
        ) : (
          <SideBar />
        )}

        <WrapRightColumn>
          <Header toogleShowSiderBar={toogleShowSiderBar} />
          <Outlet />
        </WrapRightColumn>
      </Main>
    </Container>
  );
};

export default MainLayout;
