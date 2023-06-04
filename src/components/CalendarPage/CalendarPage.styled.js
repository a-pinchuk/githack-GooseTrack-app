import styled from 'styled-components';

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WeekdaysContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  font-weight: bold;
`;

export const WeekContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  width: 100%;
`;

export const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  border-radius: 5px;
  background-color: ${props =>
    props.isCurrentDay ? '#f0f0f0' : 'transparent'};
  color: ${props => (props.isInactiveMonth ? '#999999' : 'inherit')};
`;
