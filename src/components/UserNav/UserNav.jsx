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

import goose_desktop2 from '../../images/sideBar/goose_desktop@2x.png';
import goose_desktop from '../../images/sideBar/goose_desktop.png';
import goose_tablet2 from '../../images/sideBar/goose_table@2x.png';
import goose_tablet from '../../images/sideBar/goose_table.png';
import goose_mobile2 from '../../images/sideBar/goose_mobile@2x.png';
import goose_mobile from '../../images/sideBar/goose_mobile.png';

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
          {/* dfgdfg   142 d2  120 tb  72 tm  71 d 60 t  36 m*/}
          <GooseImg
            alt="goose-track-img"
            srcSet={`
                      ${goose_desktop2}   142w,
                      ${goose_tablet2}   120w,
                      ${goose_mobile2}   72w,
                      ${goose_desktop}   71w,
                      ${goose_tablet}   60w,
                      ${goose_mobile}   36w,
                    `}
            sizes="(min-width: 1440px) 71px, (min-width: 768px) 60px, (min-width: 375px) 36px"
            src={goose_desktop}
          ></GooseImg>
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
