import React from 'react';
import {
  MainPageHeaderStyled,
  ImageWrapper,
  MainPageLoginLink,
  MainPageRegisterLink,
} from './MainPage.styled';
import goose1 from 'images/mainPage/desktop/desktop_goose_mainPage.png';
import goose2 from 'images/mainPage/desktop/desktop_goose_mainPage@2x.png';

import sprite from 'icons/sprite.svg';

const MainPage = () => {
  return (
    <MainPageHeaderStyled>
      <ImageWrapper>
        <img
          src={goose1}
          srcSet={`${goose1} 1x, ${goose2} 2x`}
          alt="goose"
          title="goose"
        />
      </ImageWrapper>

      <h1>
        G<span>oo</span>seTrack
      </h1>
      <nav>
        <MainPageLoginLink to="login">
          Log in
          <svg height="13.5" width="13.5">
            <use href={sprite + '#icon-enter'}></use>
          </svg>
        </MainPageLoginLink>
        <MainPageRegisterLink to="register">Sign up</MainPageRegisterLink>
      </nav>
    </MainPageHeaderStyled>
  );
};

export default MainPage;
