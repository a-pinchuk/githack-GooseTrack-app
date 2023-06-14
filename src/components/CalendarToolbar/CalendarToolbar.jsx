import React, { useEffect } from 'react';
import { useTour } from '@reactour/tour';
import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';
import { ToolbarWrapper } from './CalendarToolbar.styled';

export const CalendarToolbar = props => {
  const {
    today,
    typeSelect,

    prevHandler,
    nextHandler,
    typeMonthHendler,
    typeDayHendler,
    setStep,
  } = props;
  const { setIsOpen } = useTour();

  useEffect(() => {
    const hasVisitedTour = localStorage.getItem('visitedTour');

    if (hasVisitedTour !== 'true') {
      setStep(0);
      setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('visitedTour', 'true');
      }, 0);
    }
  }, [setStep, setIsOpen]);

  return (
    <>
      <ToolbarWrapper>
        <PeriodPaginator
          today={today}
          typeSelect={typeSelect}
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
