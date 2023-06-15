import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  CalendarIconStyled,
  CloseBtnIcon,
  GooseImg,
  LogoWrapper,
  StyledItem,
  StyledLink,
  StyledList,
  TextLogo,
  TextLogoSpan,
  UserIconStyled,
  UserPanel,
  LinkLogo,
} from './UserNav.styled';
import goose from '../../images/sideBar/GOOSE.png';

const getTypePage = pathname => {
  if (pathname.includes('/account')) {
    return 'account';
  } else if (pathname.includes('/calendar')) {
    return 'calendar';
  }
};

export const UserNav = ({ toogleShowSiderBar }) => {
  const { pathname } = useLocation();
  const typePage = getTypePage(pathname);
  const { t } = useTranslation();

  return (
    <div>
      <LogoWrapper>
        <LinkLogo to="calendar" onClick={() => toogleShowSiderBar(false)}>
          <GooseImg alt="goose-track-img" src={goose}></GooseImg>
          <TextLogo>
            G<TextLogoSpan>oo</TextLogoSpan>seTrack
          </TextLogo>
        </LinkLogo>

        <CloseBtnIcon
          onClick={() => toogleShowSiderBar(false)}
          stroke="currentColor"
        ></CloseBtnIcon>
      </LogoWrapper>
      <nav>
        <UserPanel>{t('sidebar.user panel')}</UserPanel>
        <StyledList>
          <StyledItem className={typePage === 'account' ? 'active' : ''}>
            <StyledLink to="account" onClick={() => toogleShowSiderBar(false)}>
              <UserIconStyled stroke="currentColor"></UserIconStyled>
              {t('sidebar.account')}
            </StyledLink>
          </StyledItem>
          <StyledItem className={typePage === 'calendar' ? 'active' : ''}>
            <StyledLink to="calendar" onClick={() => toogleShowSiderBar(false)}>
              <CalendarIconStyled stroke="currentColor"></CalendarIconStyled>
              {t('sidebar.calendar')}
            </StyledLink>
          </StyledItem>
        </StyledList>
      </nav>
    </div>
  );
};
