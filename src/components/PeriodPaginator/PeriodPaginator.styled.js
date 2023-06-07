import styled from 'styled-components';

export const PaginatorDate = styled.button`
  width: 180px;
  height: 34px;
  margin-right: 8px;
  padding: 8px 12px;
  background-color: ${props => props.theme.colors.primary};
  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.small};
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 1.125;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
`;

export const PaginatorBtn = styled.button`
  width: 38px;
  height: 34px;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: ${props => props.theme.radii.small};
  cursor: pointer;
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
