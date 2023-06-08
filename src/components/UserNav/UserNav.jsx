import { StyledItem, StyledLink, StyledList } from './UserNav.styled';

import { ReactComponent as UserIcon } from '../../images/sideBar/user-check.svg';
import { ReactComponent as CalendarIcon } from '../../images/sideBar/calendar-check.svg';

export const UserNav = () => {
  return (
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
  );
};
