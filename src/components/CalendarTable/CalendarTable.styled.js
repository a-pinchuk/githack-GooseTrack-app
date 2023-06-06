import styled from 'styled-components';

export const CalendarGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;
  max-width: 767px;
  margin: 0 auto;
  height: 470px;

  border: 1px solid rgba(220, 227, 229, 0.8);
  overflow: hidden;
  background: rgba(220, 227, 229, 0.8);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    height: 720px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1087px;
    height: 625px;
  }
`;

export const RowInCeil = styled.div`
  display: flex;
  margin-bottom: 4px;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'flex-start'};

  @media screen and (min-width: 768px) {
    margin-bottom: 1px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 6px;
  }
`;

export const DayWrapper = styled.div`
  width: 20px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-right: 2px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  /* identical to box height, or 117% */

  @media screen and (min-width: 768px) {
    width: 27px;
    height: 26px;

    font-size: 16px;
    line-height: 1.12;
    margin-right: 10px;
  }
`;

export const CurrentDay = styled.span`
  width: 100%;
  height: 100%;

  display: flex;

  color: #ffffff;

  align-items: center;
  justify-content: center;
  padding: 4px 8px;

  background: #3e85f3;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 27px;
    height: 26px;

    font-size: 16px;
    line-height: 1.12;
  }
`;

export const ShowDayWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  width: 100%;
  padding: 0;
  margin: 0;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 1.4;

  list-style: none;
`;

export const TaskItem = styled.li`
  padding: 4px 4px 4px 4px;

  border-radius: 8px;

  background-color: ${props => {
    switch (props.priority) {
      case 'low':
        return '#72C2F8';
      case 'medium':
        return '#FCF0D4';
      case 'high':
        return '#FFD2DD';
      default:
        return '#FFD2DD';
    }
  }};

  color: ${props => {
    switch (props.priority) {
      case 'low':
        return '#3E85F3';
      case 'medium':
        return '#F3B249';
      case 'high':
        return '#EA3D65';
      default:
        return '#72C2F8';
    }
  }};

  @media screen and (min-width: 768px) {
    padding: 4px 10px 4px 12px;

    font-size: 14px;
    line-height: 1.29;
  }

  @media screen and (min-width: 1440px) {
    padding: 4px 15px 4px 12px;
  }
`;
