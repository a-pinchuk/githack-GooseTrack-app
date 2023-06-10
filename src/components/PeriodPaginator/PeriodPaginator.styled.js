import styled, { css } from 'styled-components';

import { ReactComponent as ArrowRightBtnBlack } from '../../images/arrow-right-black.svg';
import { ReactComponent as ArrowLeftBtnBlack } from '../../images/arrow-left-black.svg';
//import { ReactComponent as ArrowRightBtnWhite } from '../../images/arrow-right-white.svg';
//import { ReactComponent as ArrowLeftBtnWhite } from '../../images/arrow-left-white.svg';
// import { useTheme } from '../../hooks/useTheme';

export const PaginatorWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    width: 290px;
    height: 34px;
    justify-content: flex-start;
    gap: 8px;
  }
`;

export const PaginatorDate = styled.button`
  width: ${props => (props.typeSelect === 'month' ? '150px' : '112px')};
  height: 30px;
  padding: 6px 12px;
  background-color: ${props => props.theme.colors.primary};
  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.small};
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.125;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    width: ${props => (props.typeSelect === 'month' ? '168px' : '128px')};
    height: 34px;
    padding: 8px 12px;
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const PaginatorBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 30px;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: ${props => props.theme.radii.small};
  cursor: pointer;
  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    width: 38px;
    height: 34px;
  }
`;

export const LeftPaginatorBtn = styled(PaginatorBtn)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
`;

export const RightPaginatorBtn = styled(PaginatorBtn)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const IconArrowRight = styled(ArrowRightBtnBlack)`
  width: 18px;
  height: 18px;
  //fill: currentColor;
`;
export const IconArrowRLeft = styled(ArrowLeftBtnBlack)`
  width: 18px;
  height: 18px;

  /* color: ${props =>
    props.disabled ? 'rgba(0, 0, 0, 0.4)' : 'currentColor'}; */
  /* ${props =>
    props.disabled &&
    css`
      path {
        fill: rgba(0, 0, 0, 0.4);
      }
    `} */
`;

// export const IconArrowRight = styled(({ theme, ...rest }) => {
//   const ArrowIcon = theme === 'light' ? ArrowRightBtnBlack : ArrowRightBtnWhite;
//   return <ArrowIcon {...rest} />;
// })`
//   width: 18px;
//   height: 18px;
// `;
