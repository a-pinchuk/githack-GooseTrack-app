import React from 'react';
import {
  DayPeriodTypeBtn,
  MonthPeriodTypeBtn,
  PeriodTypeWrapper,
} from './PeriodTypeSelect.styled';

export const PeriodTypeSelect = ({
  typeSelect,
  typeMonthHendler,
  typeDayHendler,
}) => {
  return (
    <PeriodTypeWrapper>
      <MonthPeriodTypeBtn
        isActive={typeSelect === 'month'}
        onClick={typeMonthHendler}
      >
        Month
      </MonthPeriodTypeBtn>
      <DayPeriodTypeBtn
        isActive={typeSelect === 'day'}
        onClick={typeDayHendler}
      >
        Day
      </DayPeriodTypeBtn>
    </PeriodTypeWrapper>
  );
};
