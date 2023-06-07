import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  /* display: block; */
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: calc(19 / 16);

  color: rgba(52, 52, 52, 0.5);
  :hover {
    color: #3e85f3;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0 0 0;
  gap: 10px;
  margin: 0;
`;

export const StyledItem = styled.li`
  width: 241px;
  height: 56px;

  background: #fff;

  border-radius: 8px;

  :hover {
    background: #e3f3ff;
  }
`;

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
