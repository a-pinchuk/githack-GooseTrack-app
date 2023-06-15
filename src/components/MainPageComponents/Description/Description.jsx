import React from 'react';
import { useTranslation } from 'react-i18next';

import { useResponse } from 'hooks';
import {
  Main,
  Section,
  InfoBox,
  InfoBoxReverse,
  ImageWrapper,
  Number,
  ColorTitle,
  SubTitle,
  Text,
} from './Description.styled';

//desktop_images
import d_calendar from 'images/mainPage/desktop/desktop_calendar.png';
import d_calendar2 from 'images/mainPage/desktop/desktop_calendar@2x.png';
import d_sidebar from 'images/mainPage/desktop/desktop_sidebar.png';
import d_sidebar2 from 'images/mainPage/desktop/desktop_sidebar@2x.png';
import d_all from 'images/mainPage/desktop/desktop_all.png';
import d_all2 from 'images/mainPage/desktop/desktop_all@2x.png';

//tablet_images
import t_calendar from 'images/mainPage/tablet/tablet_calendar.png';
import t_calendar2 from 'images/mainPage/tablet/tablet_calendar@2x.png';
import t_sidebar from 'images/mainPage/tablet/tablet_sidebar.png';
import t_sidebar2 from 'images/mainPage/tablet/tablet_sidebar@2x.png';
import t_all from 'images/mainPage/tablet/tablet_all.png';
import t_all2 from 'images/mainPage/tablet/tablet_all@2x.png';

//mobile_images
import m_calendar from 'images/mainPage/mobile/mobile_calendar.png';
import m_calendar2 from 'images/mainPage/mobile/mobile_calendar@2x.png';
import m_sidebar from 'images/mainPage/mobile/mobile_sidebar.png';
import m_sidebar2 from 'images/mainPage/mobile/mobile_sidebar@2x.png';
import m_all from 'images/mainPage/mobile/mobile_all.png';
import m_all2 from 'images/mainPage/mobile/mobile_all@2x.png';

export const Description = () => {
  const { t } = useTranslation();
  const { isDesktop, isTablet, isMobile } = useResponse();

  return (
    <Main id="mainPagesection">
      <Section>
        <InfoBox>
          <Number>1.</Number>
          <ColorTitle>{t('mainPage.calendar.title')}</ColorTitle>
          <SubTitle>{t('mainPage.calendar.view')}</SubTitle>
          <Text>{t('mainPage.calendar.description')}</Text>
        </InfoBox>
        <ImageWrapper>
          {isMobile && (
            <img
              srcSet={`${m_calendar} 1x, ${m_calendar2} 2x`}
              src={m_calendar}
              alt="calendar views"
              width="335"
              height="457"
            />
          )}
          {isTablet && (
            <img
              srcSet={`${t_calendar} 1x, ${t_calendar2} 2x`}
              src={t_calendar}
              alt="calendar views"
              width="704"
              height="700"
            />
          )}
          {isDesktop && (
            <img
              srcSet={`${d_calendar} 1x, ${d_calendar2} 2x`}
              src={d_calendar}
              alt="calendar views"
              width="604"
              height="700"
            />
          )}
        </ImageWrapper>
      </Section>

      <Section>
        <InfoBoxReverse>
          <Number>2.</Number>
          <SubTitle>{t('mainPage.sidebar.title')}</SubTitle>
          <Text>{t('mainPage.sidebar.description')}</Text>
        </InfoBoxReverse>
        <ImageWrapper>
          {isMobile && (
            <img
              srcSet={`${m_sidebar} 1x, ${m_sidebar2} 2x`}
              src={m_sidebar}
              alt="sidebar views"
              width="335"
              height="457"
            />
          )}
          {isTablet && (
            <img
              srcSet={`${t_sidebar} 1x, ${t_sidebar2} 2x`}
              src={t_sidebar}
              alt="sidebar views"
              width="704"
              height="700"
            />
          )}
          {isDesktop && (
            <img
              srcSet={`${d_sidebar} 1x, ${d_sidebar2} 2x`}
              src={d_sidebar}
              alt="sidebar views"
              width="604"
              height="700"
            />
          )}
        </ImageWrapper>
      </Section>

      <Section>
        <InfoBox>
          <Number>3.</Number>
          <ColorTitle>{t('mainPage.allinone.title1')}</ColorTitle>
          <SubTitle>{t('mainPage.allinone.title2')}</SubTitle>
          <Text>{t('mainPage.allinone.description')}</Text>
        </InfoBox>
        <ImageWrapper>
          {isMobile && (
            <img
              srcSet={`${m_all} 1x, ${m_all2} 2x`}
              src={m_all}
              alt="all calendar view"
              width="335"
              height="457"
            />
          )}
          {isTablet && (
            <img
              srcSet={`${t_all} 1x, ${t_all2} 2x`}
              src={t_all}
              alt="all calendar view"
              width="704"
              height="700"
            />
          )}
          {isDesktop && (
            <img
              srcSet={`${d_all} 1x, ${d_all2} 2x`}
              src={d_all}
              alt="all calendar view"
              width="604"
              height="700"
            />
          )}
        </ImageWrapper>
      </Section>
    </Main>
  );
};
