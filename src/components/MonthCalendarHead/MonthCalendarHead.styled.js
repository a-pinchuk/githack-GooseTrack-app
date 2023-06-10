import styled from 'styled-components';

export const DaysWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 0 auto 14px;
  padding: 16px 0 16px 0;
  height: 50px;
  max-width: 767px;

  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 1.12;

  background: ${p => p.theme.colors.second_backgrond_mode};
  border: ${p => p.theme.colors.calendar_out_border};
  border-radius: 8px;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    height: 46px;
    max-width: 704px;
    margin-bottom: 14px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    height: 46px;
    max-width: 1087px;
    margin-bottom: 15px;
  }
`;

export const СellOfDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props =>
    props.isWeekend
      ? `${props.theme.colors.primary}`
      : `${props.theme.colors.third_text_mode}`};
`;
