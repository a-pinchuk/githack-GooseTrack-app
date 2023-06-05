import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainPageHeaderStyled = styled.header`
  /* font-family: 'Coolvetica'; */
  height: 812px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 1024px;
  }
  @media screen and (min-width: 1440px) {
    height: 100vh;
  }

  background-color: ${p => p.theme.colors.primary};

  nav {
    margin-top: 32px;

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 208px;
  }

  h1 {
    font-weight: 400;
    color: #fff;
    font-size: 44px;
    line-height: 1.09;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
      0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

    @media screen and (min-width: 768px) {
      font-size: 120px;
      line-height: 1.25;
    }
  }

  span {
    font-style: italic;
  }
`;

export const ImageWrapper = styled.div`
  width: 142px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 232px;

  @media screen and (min-width: 768px) {
    width: 150px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-top: 321px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 187px;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const MainPageLoginLink = styled(Link)`
  font-family: ${p => p.theme.fonts.text};
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
