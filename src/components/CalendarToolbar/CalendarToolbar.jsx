import React from 'react';
import { useTour } from '@reactour/tour';
import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';
import { ToolbarWrapper } from './CalendarToolbar.styled';

export const CalendarToolbar = props => {
  const {
    today,
    typeSelect,
    todayHandler,
    prevHandler,
    nextHandler,
    typeMonthHendler,
    typeDayHendler,
  } = props;
  const { setIsOpen } = useTour();

  return (
    <>
      <ToolbarWrapper>
        <PeriodPaginator
          today={today}
          typeSelect={typeSelect}
          todayHandler={todayHandler}
          prevHandler={prevHandler}
          nextHandler={nextHandler}
        />
        <button onClick={() => setIsOpen(true)}>Open Tour</button>
        <PeriodTypeSelect
          typeSelect={typeSelect}
          typeMonthHendler={typeMonthHendler}
          typeDayHendler={typeDayHendler}
        />
      </ToolbarWrapper>
    </>
  );
};
