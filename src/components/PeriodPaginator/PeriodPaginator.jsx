import React from 'react';
import moment from 'moment';
import {
  LeftPaginatorBtn,
  PaginatorDate,
  RightPaginatorBtn,
} from './PeriodPaginator.styled';

export const PeriodPaginator = ({
  today,
  typeSelect,
  todayHandler,
  prevHandler,
  nextHandler,
}) => {
  return (
    <div>
      <PaginatorDate onClick={todayHandler}>
        {typeSelect === 'month'
          ? today.format('MMMM YYYY')
          : today.format('D  MMMM YYYY ')}
      </PaginatorDate>
      <LeftPaginatorBtn
        onClick={prevHandler}
        disabled={today.format('YYYY-MM') === moment().format('YYYY-MM')}
      >
        {'<'}
      </LeftPaginatorBtn>
      <RightPaginatorBtn onClick={nextHandler}>{'>'}</RightPaginatorBtn>
    </div>
  );
};
