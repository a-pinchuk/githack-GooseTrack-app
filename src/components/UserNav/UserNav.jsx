import {
  CalendarIconStyled,
  GooseImg,
  LogoWrapper,
  MobileMenuCloseBtn,
  StyledItem,
  StyledLink,
  StyledList,
  TextLogo,
  TextLogoSpan,
  UserIconStyled,
} from './UserNav.styled';
import goose from '../../images/sideBar/GOOSE.png';

// import { ReactComponent as UserIcon } from '../../images/sideBar/user-check.svg';
// import { ReactComponent as CalendarIcon } from '../../images/sideBar/calendar-check.svg';
import { toggleSidebar } from 'redux/sidebar/sidebarSlice';
import { useDispatch } from 'react-redux';
import { RxCross1 } from 'react-icons/rx';

export const UserNav = () => {
  const dispatch = useDispatch();

  // const isOpen = useSelector(state => state.sidebar.isOpen);

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
        <MobileMenuCloseBtn onClick={handleSideBar}>
          <RxCross1 size={30} color="var(--primary-text)" />
        </MobileMenuCloseBtn>
      </LogoWrapper>
      <nav>
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
