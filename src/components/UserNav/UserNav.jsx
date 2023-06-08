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
} from './UserNav.styled';
import goose from '../../images/sideBar/GOOSE.png';

export const UserNav = ({ toogleShowSiderBar }) => {
  return (
    <div>
      <LogoWrapper>
        <GooseImg alt="goose-track-img" src={goose}></GooseImg>
        <TextLogo>
          G<TextLogoSpan>oo</TextLogoSpan>seTrack
        </TextLogo>
        <CloseBtnIcon
          onClick={toogleShowSiderBar}
          stroke="currentColor"
        ></CloseBtnIcon>
      </LogoWrapper>
      <nav>
        <UserPanel>User Panel</UserPanel>
        <StyledList>
          <StyledItem>
            <StyledLink to="account">
              <UserIconStyled stroke="currentColor"></UserIconStyled>
              My account
            </StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="calendar">
              <CalendarIconStyled stroke="currentColor"></CalendarIconStyled>
              Calendar
            </StyledLink>
          </StyledItem>
        </StyledList>
      </nav>
    </div>
  );
};
