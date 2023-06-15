import React from 'react';
import { useTranslation } from 'react-i18next';

import { useViewportHeight } from 'hooks';
import LanguageSwitcher from './LanguageSwitcher';

import {
  Header,
  ContentWrapper,
  ImageWrapper,
  LoginLink,
  RegisterLink,
  ScrollDownWrapper,
} from './AuthSection.styled';

import goose1 from 'images/mainPage/desktop/desktop_goose_mainPage.png';
import goose2 from 'images/mainPage/desktop/desktop_goose_mainPage@2x.png';
import scroll from 'images/mainPage/scroll-down.gif';

import sprite from 'icons/sprite.svg';

export const AuthSection = () => {
  const viewportHeight = useViewportHeight();
  const { t } = useTranslation();

  return (
    <Header height={viewportHeight}>
      <ContentWrapper height={viewportHeight}>
        <ImageWrapper>
          <img
            srcSet={`${goose1} 1x, ${goose2} 2x`}
            src={goose1}
            alt="Goose welcome you"
            title="Goose welcome you"
          />
        </ImageWrapper>
        <h1>
          G<span>oo</span>seTrack
        </h1>
        <LanguageSwitcher position="header" />
        <nav>
          <LoginLink to="login">
            {t('nav.login.title')}
            <svg height="13.5" width="13.5">
              <use href={sprite + '#icon-enter'}></use>
            </svg>
          </LoginLink>
          <RegisterLink to="register">{t('nav.signup.title')}</RegisterLink>
        </nav>
      </ContentWrapper>

      <ScrollDownWrapper>
        <a href="#mainPagesection">
          <img src={`${scroll}`} alt="scroll down" title="scroll down" />
        </a>
      </ScrollDownWrapper>
    </Header>
  );
};
