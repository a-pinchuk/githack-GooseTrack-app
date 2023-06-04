import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainPageHeaderStyled = styled.header`
  /* font-family: 'Coolvetica'; */
  height: 812px;

  background-color: #3e85f3;

  nav {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    row-gap: 208px;
    align-items: center;
  }

  h1 {
    font-weight: 400;
    margin-top: 2px;
    color: #fff;
    font-size: 44px;
    line-height: 1.09;
    text-align: center;
    margin-bottom: 0;
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
      0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  }

  span {
    font-style: italic;
  }
`;

export const MainPageLoginLink = styled(Link)`
  /* font-family: 'Inter'; */
  cursor: pointer;

  font-weight: 600;
  display: flex;
  column-gap: 8.25px;
  justify-content: center;
  align-items: center;
  width: 131px;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;
  background-color: #fff;
  color: #3e85f3;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.29;
  padding-top: 14px;
  padding-bottom: 14px;
  opacity: 1;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

export const MainPageRegisterLink = styled(Link)`
  /* font-family: 'Inter'; */
  cursor: pointer;

  color: #fff;
  font-size: 12px;
  line-height: 1.16;
  text-decoration: underline;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
