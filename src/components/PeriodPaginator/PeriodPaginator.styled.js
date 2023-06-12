import styled from 'styled-components';

import { ReactComponent as ArrowRightBtnBlack } from '../../images/arrow-right-black.svg';
import { ReactComponent as ArrowLeftBtnBlack } from '../../images/arrow-left-black.svg';

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
    width: ${props => (props.typeSelect === 'month' ? '168px' : '132px')};
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
  background-color: ${props => props.theme.colors.second_backgrond_mode};
  border: ${p => p.theme.colors.calendar_out_border};
  border-radius: ${props => props.theme.radii.small};
  cursor: pointer;
  color: ${p => p.theme.colors.primary_text_mode};
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
  stroke: ${p => p.theme.colors.primary_text_mode};
`;

export const IconArrowRLeft = styled(ArrowLeftBtnBlack)`
  width: 18px;
  height: 18px;
  stroke: ${p =>
    p.disabled
      ? p.theme.colors.calendar_out_border
      : p.theme.colors.primary_text_mode};
`;
