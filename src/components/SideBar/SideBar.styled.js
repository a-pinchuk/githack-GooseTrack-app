import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const WrapAuth = styled.div`
  background-color: #ffffff;
  width: 289px;
  height: 900px;
  padding-top: 32px;
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
`;

export const BtnLogout = styled.button`
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;
  width: 141px;
  height: 56px;
  background-color: #3e85f3;
  border: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #ffff;
`;

export const TitleUser = styled.p`
  color: rgba(52, 52, 52, 0.5);
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  margin-top: 32px;
  margin-bottom: 15px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  padding: 16px 165px 16px 20px;
  color: rgba(52, 52, 52, 0.5);
  &.active {
    color: #3e85f3;
    padding: 16px 165px 16px 20px;
    background-color: #e3f3ff;
    border-radius: 8px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 34px;
  list-style: none;
  padding-left: 0;
  margin-top: 32px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
`;

export const WrapIcon = styled.div`
  display: flex;
`;

export const HeroTitle = styled.h1`
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  color: #3e85f3;
`;

export const IconHero = styled.div`
  height: 68px;
  width: 71px;
  background-color: #3e85f3;
`;
