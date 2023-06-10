import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as UserIcon } from '../../images/sideBar/user-check.svg';
import { ReactComponent as CalendarIcon } from '../../images/sideBar/calendar-check.svg';
import { ReactComponent as CloseIcon } from '../../images/x-close.svg';

export const StyledLink = styled(NavLink)`
  text-decoration: none;

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

  color: ${props => props.theme.colors.second_text_mode};
  :hover {
    color: ${props => props.theme.colors.hover_button};
  }

  font-size: 14px;
  line-height: 17px;
  padding: 10px 0px 10px 14px;

  @media screen and (min-width: 768px) {
    padding: 18.5px 0px 18.5px 25px;
    font-size: 16px;
    line-height: calc(19 / 16);
  }
`;

export const UserPanel = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: calc(15 / 12);
  color: ${props => props.theme.colors.second_text_mode};
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

  border-radius: 8px;

  :hover {
    background: ${props => props.theme.colors.background_button};
  }

  width: 185px;
  height: 40px;
  /* } */

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

  color: ${props => props.theme.colors.hover_button};

  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  font-size: 16px;
  line-height: calc(22 / 16);
  margin: 0;
  /* } */

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

export const CloseBtnIcon = styled(CloseIcon)`
  width: 24px;
  height: 24px;
  margin-left: 35px;
  cursor: pointer;
  color: ${props => props.theme.colors.primary_text_mode};

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
  width: 36px;
  height: 100%;

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 71px;
    height: 68px;
  }
`;
