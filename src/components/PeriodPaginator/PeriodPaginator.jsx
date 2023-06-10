import React from 'react';
import moment from 'moment';
import {
  IconArrowRLeft,
  IconArrowRight,
  LeftPaginatorBtn,
  PaginatorDate,
  PaginatorWrapper,
  RightPaginatorBtn,
} from './PeriodPaginator.styled';
import { useParams } from 'react-router-dom';

export const PeriodPaginator = ({
  today,
  typeSelect,
  todayHandler,
  prevHandler,
  nextHandler,
}) => {
  const { currentDate, currentDay } = useParams();

  return (
    <PaginatorWrapper>
      <PaginatorDate typeSelect={typeSelect} onClick={todayHandler}>
        {typeSelect === 'month'
          ? today.format('MMMM YYYY')
          : today.format('D MMM YYYY ')}
      </PaginatorDate>
      <div>
        <LeftPaginatorBtn
          onClick={prevHandler}
          disabled={
            currentDay === moment().format('YYYY-MM-DD') ||
            currentDate === moment().format('YYYY-MM-DD')
          }
        >
          <IconArrowRLeft />
        </LeftPaginatorBtn>
        <RightPaginatorBtn onClick={nextHandler}>
          <IconArrowRight />
        </RightPaginatorBtn>
      </div>
    </PaginatorWrapper>
  );
};
