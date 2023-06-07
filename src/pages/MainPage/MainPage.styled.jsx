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

    @media screen and (min-width: 768px) {
      margin-top: 40px;

      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      column-gap: 24px;
    }
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0;

    font-weight: 400;
    font-size: 44px;
    line-height: 1.09;
    text-align: center;

    color: ${p => p.theme.colors.white};

    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
      0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

    @media screen and (min-width: 768px) {
      font-size: ${p => p.theme.fontSizes.xl};
      line-height: ${p => p.theme.lineHeights.body};
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
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8.25px;

  width: 131px;
  padding-top: 14px;
  padding-bottom: 14px;

  font-family: ${p => p.theme.fonts.text};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.29;
  text-decoration: none;

  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.background};

  border-radius: ${p => p.theme.radii.big};
  box-shadow: ${p => p.theme.shadows.boxShadow};

  opacity: 1;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  & svg {
    stroke: ${p => p.theme.colors.primary};
  }
`;

export const MainPageRegisterLink = styled(Link)`
  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.16;
  text-decoration: underline;

  color: ${p => p.theme.colors.white};
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
