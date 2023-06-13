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

export const UserNav = ({ toogleShowSiderBar }) => {
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
        <UserPanel>User Panel</UserPanel>
        <StyledList>
          <StyledItem>
            <StyledLink to="account" onClick={() => toogleShowSiderBar(false)}>
              <UserIconStyled stroke="currentColor"></UserIconStyled>
              My account
            </StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="calendar" onClick={() => toogleShowSiderBar(false)}>
              <CalendarIconStyled stroke="currentColor"></CalendarIconStyled>
              Calendar
            </StyledLink>
          </StyledItem>
        </StyledList>
      </nav>
    </div>
  );
};
