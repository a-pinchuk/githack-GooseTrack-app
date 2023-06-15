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
        data-tour="1"
        isActive={typeSelect === 'month'}
        onClick={typeMonthHendler}
      >
        Month
      </MonthPeriodTypeBtn>
      <DayPeriodTypeBtn
        data-tour="2"
        isActive={typeSelect === 'day'}
        onClick={typeDayHendler}
      >
        Day
      </DayPeriodTypeBtn>
    </PeriodTypeWrapper>
  );
};
