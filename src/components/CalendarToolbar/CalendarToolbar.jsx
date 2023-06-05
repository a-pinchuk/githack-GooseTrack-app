import React, { useState } from 'react';

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

  // const [date, setDate] = useState(today);
  // console.log('CalendarToolbar ~ setDate:', setDate);
  // console.log('CalendarToolbar ~ date:', date);

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
        <PeriodTypeSelect
          typeSelect={typeSelect}
          typeMonthHendler={typeMonthHendler}
          typeDayHendler={typeDayHendler}
        />
      </ToolbarWrapper>
    </>
  );
};
