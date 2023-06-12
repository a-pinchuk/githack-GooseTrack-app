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

  const user = useSelector(selectUser); //зробити деструктуризацію отримати createdAt
  console.log('user:', user);

  const createdAt = '2023-05-02T09:46:51.648+00:00';
  const dateCreatedUser = moment(createdAt).format('YYYY-MM-DD');

  //const dateCreatedUser = '2023-05-28';

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
