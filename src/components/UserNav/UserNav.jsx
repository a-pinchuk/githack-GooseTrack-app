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
import { toggleSidebar } from 'redux/sidebar/sidebarSlice';
import { useDispatch } from 'react-redux';

export const UserNav = () => {
  const dispatch = useDispatch();

  const handleSideBar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div>
      <LogoWrapper>
        <GooseImg alt="goose-track-img" src={goose}></GooseImg>
        <TextLogo>
          G<TextLogoSpan>oo</TextLogoSpan>seTrack
        </TextLogo>
        <CloseBtnIcon
          onClick={handleSideBar}
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
