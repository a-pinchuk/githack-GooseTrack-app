import React from 'react';
import { MonthCalendarHead } from '../MonthCalendarHead/MonthCalendarHead';
import { CalendarTable } from '../CalendarTable/CalendarTable';

export const ChoosedMonth = ({ today, startDay }) => {
  return (
    <div>
      <MonthCalendarHead />
      <CalendarTable startDay={startDay} today={today} />
    </div>
  );
};
