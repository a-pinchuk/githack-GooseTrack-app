import styled from 'styled-components';

export const WeeksItem = styled.div`
  height: 68px;
  padding-top: 10px;
  padding-bottom: 14px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;
  border: 1px solid transparent;
  background: var(--primary-bgc-color);
  border-radius: 8px;
  color: var(--btn-arrow-accent-color);
`;

export const WeeksItemDay = styled.div`
  display: inline-block;
  width: 27px;
  height: 26px;
  padding: 3px;
  border-radius: 6px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: var(--text-day-color);
`;

export const WeeksItemCurrent = styled.div`
  display: inline-block;
  width: 27px;
  height: 26px;
  padding: 5px;
  background: #3e85f3;
  border-radius: 6px;
  color: #fff;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
`;

export const DivGridWeeks = styled.div`
  border-radius: 8px;
  background: var(--primary-bgc-color);
  border: 1px solid rgba(220, 227, 229, 0.8);
  margin-top: 24px;
  margin-bottom: 32px;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  & :nth-child(6) {
    color: #3e85f3;
  }

  & :nth-child(7) {
    color: #3e85f3;
  }
`;

export const WeeksItemDateName = styled.div`
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
`;

export const SelectedDay = styled.div`
  display: inline-block;
  outline: 2px solid var(--accent-selected);
  border-radius: 8px;
`;
