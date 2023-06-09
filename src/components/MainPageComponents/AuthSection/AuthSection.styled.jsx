import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

// export const Header = styled.header`
//   /* height: ${p => p.height}px; */

//   height: 812px;

//   @media screen and (min-width: 768px) and (max-width: 1439px) {
//     /* height: ${p => p.height}px; */
//     height: 1024px;
//   }
//   @media screen and (min-width: 1440px) {
//     /* height: ${p => p.height}px; */
//     height: 100vh;
//   }

//   background-color: ${p => p.theme.colors.primary};

//   nav {
//     /* ${({ height }) =>
//       css`
//         padding-top: calc(${height}px * 3.94 / 100);
//       `} */
//     margin-top: 32px;

//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     row-gap: 208px;

//     @media screen and (min-width: 768px) {
//       /* ${({ height }) =>
//         css`
//           padding-top: calc(${height}px * 3.9 / 100);
//         `} */
//       margin-top: 40px;

//       flex-direction: row-reverse;
//       justify-content: center;
//       align-items: center;
//       column-gap: 24px;
//     }
//   }

//   h1 {
//     margin-top: 0;
//     margin-bottom: 0;

//     font-family: 'Coolvetica';
//     font-weight: 400;
//     font-size: 44px;
//     line-height: 1.09;
//     text-align: center;

//     color: ${p => p.theme.colors.white};

//     text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
//       0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

//     @media screen and (min-width: 768px) {
//       font-size: ${p => p.theme.fontSizes.xl};
//       line-height: ${p => p.theme.lineHeights.body};
//     }

//     span {
//       font-style: italic;
//     }
//   }
// `;

export const Header = styled.header`
  height: ${p => p.height}px;

  display: flex;
  justify-content: center;
  align-items: center;

  /* height: 812px; */

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: ${p => p.height}px;
    /* height: 1024px; */
  }
  @media screen and (min-width: 1440px) {
    height: ${p => p.height}px;
    /* height: 100vh; */
  }

  background-color: ${p => p.theme.colors.primary};
`;

export const ContentWrapper = styled.div`
  nav {
    /* ${({ height }) =>
      css`
        padding-top: calc(${height}px * 3.94 / 100);
      `} */
    margin-top: 32px;

    display: flex;
    flex-direction: column;
    align-items: center;
    ${({ height }) =>
      css`
        row-gap: calc(${height}px * 25.61 / 100);
      `}
    /* row-gap: 208px; */

    @media screen and (min-width: 768px) {
      /* ${({ height }) =>
        css`
          padding-top: calc(${height}px * 3.9 / 100);
        `} */
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

    @media screen and (max-height: 420px) and (min-width: 768px) {
      font-size: 100px;
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
  /* ${({ height }) =>
    css`
      padding-top: calc(${height}px * 28.57 / 100);
    `} */
  /* padding-top: calc(${p => p.heightW} * 28.57 / 100); */
  /* ${({ height }) => `padding-top: calc(${height} * 28.57 / 100)px;`} */

  /* padding-top: 232px; */

  /* @media screen and (max-height: 420px) {
    width: 100px;
  } */

  @media screen and (min-width: 768px) {
    width: 150px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    /* ${({ height }) =>
      css`
        padding-top: calc(${height}px * 31.35 / 100);
      `} */
    /* padding-top: 321px; */
  }
  @media screen and (min-width: 1440px) {
    /* ${({ height }) =>
      css`
        padding-top: calc(${height}px * 24.29 / 100);
      `} */
    /* padding-top: 187px; */
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
