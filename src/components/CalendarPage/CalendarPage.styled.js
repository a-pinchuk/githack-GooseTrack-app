import styled from 'styled-components';

export const CalendarContainer = styled.div`
  margin: 0 20px;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    margin: 0 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin: 0 32px;
  }
`;
