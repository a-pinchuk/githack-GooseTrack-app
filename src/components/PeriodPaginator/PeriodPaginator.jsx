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
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

export const PeriodPaginator = ({
  today,
  typeSelect,
  todayHandler,
  prevHandler,
  nextHandler,
}) => {
  const { currentDate, currentDay } = useParams();

  const { createdAt } = useSelector(selectUser);
  const dateCreatedUser = moment(createdAt).format('YYYY-MM-DD');

  const isDisabled =
    currentDay === dateCreatedUser ||
    currentDate?.slice(0, 7) === dateCreatedUser?.slice(0, 7);

  return (
    <PaginatorWrapper>
      <PaginatorDate typeSelect={typeSelect} onClick={todayHandler}>
        {typeSelect === 'month'
          ? today.format('MMMM YYYY')
          : today.format('D MMM YYYY ')}
      </PaginatorDate>
      <div data-tour="3">
        <LeftPaginatorBtn onClick={prevHandler} disabled={isDisabled}>
          <IconArrowRLeft disabled={isDisabled} />
        </LeftPaginatorBtn>
        <RightPaginatorBtn onClick={nextHandler}>
          <IconArrowRight />
        </RightPaginatorBtn>
      </div>
    </PaginatorWrapper>
  );
};
