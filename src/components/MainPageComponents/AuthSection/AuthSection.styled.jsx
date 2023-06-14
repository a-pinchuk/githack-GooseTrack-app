import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
export const TRANSITION = {
  duration: '300ms',
  timing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  delay: '0ms',
};

export const Header = styled.header`
  height: ${p => p.height}px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.theme.colors.primary};
`;

export const ContentWrapper = styled.div`
  nav {
    margin-top: 32px;

    display: flex;
    flex-direction: column;
    align-items: center;

    ${({ height }) =>
      css`
        row-gap: calc(${height}px * 25.61 / 100);
      `}

    @media screen and (min-width: 768px) {
      margin-top: 40px;

      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      column-gap: 24px;
    }

    @media screen and (max-height: 425px) {
      margin-top: 32px;

      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      column-gap: 24px;
    }
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0;

    font-family: 'Coolvetica';
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

    @media screen and (max-height: 425px) {
      font-size: 100px;
    }

    @media screen and (max-width: 767px) {
      font-size: 44px;
    }

    @media screen and (max-height: 375px) {
      font-size: 44px;
    }

    span {
      font-style: italic;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 142px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 150px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const LoginLink = styled(Link)`
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

export const RegisterLink = styled(Link)`
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

export const ScrollDownWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 20px;

  height: 40px;
  width: 40px;

  @media screen and (min-width: 768px) {
    bottom: 20px;
    right: 10px;

    height: 70px;
    width: 70px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
export const LanguageButton = styled.button`
  border-radius: 50%;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  &:not(:last-child) {
    margin-right: 5px;
  }
  @media ${'768px'} {
    margin-right: 5px;
  }
`;
export const FlagImg = styled.img`
  display: block;
  width: ${p => {
    switch (p.position) {
      case 'menu':
        return `30px`;
      case 'header':
        return '28px';
      default:
        return `32px`;
    }
  }};
  height: ${p => {
    switch (p.position) {
      case 'menu':
        return `30px`;
      case 'header':
        return '28px';
      default:
        return `32px`;
    }
  }};
  filter: ${p => {
    if (p.isActive && p.language === 'en')
      return `drop-shadow(1px 3px 10px #3f51b5)`;
    if (p.isActive && p.language === 'ua') return;
  }};
  transition: filter ${TRANSITION.duration} ${TRANSITION.timing};

  &:hover,
  &:focus {
    filter: ${p => {
      if (p.language === 'en') return `drop-shadow(1px 3px 10px #3f51b5)`;
      if (p.language === 'ua') return `drop-shadow(1px 3px 10px #50b8f8)`;
      return;
    }};
  }
  @media screen and (min-width: 420px) {
    width: 32px;
    height: 32px;
  }
`;
export const LanguageBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${p => {
    switch (p.position) {
      case 'menu':
        return `0px`;
      case 'header':
        return '15px';
      default:
        return;
    }
  }};
  @media screen and (min-width: 420px) {
    flex-wrap: ${p => {
      switch (p.position) {
        case 'menu':
          return `wrap`;
        case 'header':
          return 'nowrap';
        default:
          return;
      }
    }};
  }
`;
