import React from 'react';
import {
  MainPageHeaderStyled,
  MainPageLoginLink,
  MainPageRegisterLink,
} from './MainPage.styled';

const MainPage = () => {
  return (
    <MainPageHeaderStyled>
      <h1>
        G<span>oo</span>seTrack
      </h1>
      <nav>
        <MainPageLoginLink to="login">Log in</MainPageLoginLink>
        <MainPageRegisterLink to="register">Sign up</MainPageRegisterLink>
      </nav>
    </MainPageHeaderStyled>
  );
};

export default MainPage;
