import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as UserIcon } from '../../images/sideBar/user-check.svg';
import { ReactComponent as CalendarIcon } from '../../images/sideBar/calendar-check.svg';
// import { RxCross1 } from 'react-icons/rx';
import { ReactComponent as CloseIcon } from '../../images/x-close.svg';

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
  @media screen and (min-width: 375px) {
    font-size: 14px;
    line-height: 17px;
    padding: 10px 0px 10px 14px;
  }

  @media screen and (min-width: 768px) {
    padding: 18.5px 0px 18.5px 25px;
    font-size: 16px;
    line-height: calc(19 / 16);
    /* gap: 10px; */
  }
`;

export const UserPanel = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: calc(15 / 12);
  color: rgba(52, 52, 52, 0.5);
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

  @media screen and (min-width: 375px) {
    width: 185px;
    height: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 225px;
    height: 56px;
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

  @media screen and (min-width: 375px) {
    font-size: 16px;
    line-height: calc(22 / 16);
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(24 / 18);
    margin: 0;
  }
`;

export const TextLogoSpan = styled.span`
  font-style: italic;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 64px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const MobileMenuCloseBtn = styled.button`
  fill: var(--primary-text);
  background-color: transparent;
  border: none;

  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  margin-left: 35px;

  @media screen and (min-width: 768px) {
    width: 33px;
    height: 33px;
  }

  @media screen and (min-width: 1440px) {
    width: 40px;
    height: 40px;
  }
`;

export const CloseBtnIcon = styled(CloseIcon)`
  width: 24px;
  height: 24px;
  margin-left: 35px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 33px;
    height: 33px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const UserIconStyled = styled(UserIcon)`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const CalendarIconStyled = styled(CalendarIcon)`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const GooseImg = styled.img`
  @media screen and (min-width: 375px) {
    width: 36px;
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 71px;
    height: 68px;
  }
`;
