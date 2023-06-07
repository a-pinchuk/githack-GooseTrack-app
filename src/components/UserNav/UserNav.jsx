import {
  StyledItem,
  StyledLink,
  StyledList,
  TextLogo,
  TextLogoSpan,
} from './UserNav.styled';
import goose from '../../images/sideBar/GOOSE.png';

import { ReactComponent as UserIcon } from '../../images/sideBar/user-check.svg';
import { ReactComponent as CalendarIcon } from '../../images/sideBar/calendar-check.svg';

export const UserNav = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '32px',
        }}
      >
        <img width="71px" height="68px" alt="goose-track-img" src={goose}></img>
        <TextLogo>
          G<TextLogoSpan>oo</TextLogoSpan>seTrack
        </TextLogo>
      </div>
      <nav>
        <StyledList>
          <StyledItem>
            <StyledLink to="account">
              <UserIcon stroke="currentColor"></UserIcon>
              My account
            </StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="calendar">
              <CalendarIcon stroke="currentColor"></CalendarIcon>
              Calendar
            </StyledLink>
          </StyledItem>
        </StyledList>
      </nav>
    </div>
  );
};
