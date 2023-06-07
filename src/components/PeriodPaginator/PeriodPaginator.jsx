import React from 'react';
import moment from 'moment';
import {
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
  const { currentDay } = useParams();

  return (
    <PaginatorWrapper>
      <PaginatorDate onClick={todayHandler}>
        {typeSelect === 'month'
          ? today.format('MMMM YYYY')
          : today.format('D  MMMM YYYY ')}
      </PaginatorDate>
      <LeftPaginatorBtn
        onClick={prevHandler}
        disabled={
          currentDay === moment().format('YYYY-MM-DD') ||
          currentDay === moment().format('YYYY-MM')
        }
      >
        {'<'}
      </LeftPaginatorBtn>
      <RightPaginatorBtn onClick={nextHandler}>{'>'}</RightPaginatorBtn>
    </PaginatorWrapper>
  );
};
