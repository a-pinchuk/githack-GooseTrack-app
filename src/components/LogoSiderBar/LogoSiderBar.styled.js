import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TextLogo = styled.p`
  font-family: 'Coolvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  /* identical to box height, or 100% */

  color: #3e85f3;

  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;

export const TextLogoSpan = styled.span`
  font-style: italic;
`;

export const NavLinkCalendar = styled(NavLink)`
  text-decoration: none;
`;
