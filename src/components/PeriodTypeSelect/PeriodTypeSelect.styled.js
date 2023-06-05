import styled from 'styled-components';

export const PeriodTypeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PeriodTypeBtn = styled.button`
  width: 82px;
  height: 34px;
  border: none;
  border-radius: ${props => props.theme.radii.small};
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 1.125;
  text-align: center;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;

  background-color: ${props =>
    props.isActive
      ? props.theme.colors.darkBlue
      : props.theme.colors.lightBlue};
`;

export const MonthPeriodTypeBtn = styled(PeriodTypeBtn)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 1px solid rgba(62, 133, 243, 0.2);
`;

export const DayPeriodTypeBtn = styled(PeriodTypeBtn)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;
