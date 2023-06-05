import React from 'react';
import { DaysWrapper, СellOfDay } from './MonthCalendarHead.styled';
import moment from 'moment';
import { useMediaQuery } from 'react-responsive';

export const MonthCalendarHead = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  // const isDesktop = useMediaQuery({ minWidth: 1440 });

  const daysArray = [...Array(7)].map((_, i) => {
    if (isMobile) {
      return moment()
        .day(i + 1)
        .format('ddd')
        .toUpperCase()[0];
    }
    return moment()
      .day(i + 1)
      .format('ddd')
      .toUpperCase();
  });

  return (
    <DaysWrapper>
      {daysArray.map((day, i) => (
        <СellOfDay key={i} isWeekend={i === 5 || i === 6}>
          {day}
        </СellOfDay>
      ))}
    </DaysWrapper>
  );
};
