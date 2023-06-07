import React from 'react';
import { MonthCalendarHead } from '../MonthCalendarHead/MonthCalendarHead';
import { CalendarTable } from '../CalendarTable/CalendarTable';
import { useSelector } from 'react-redux';
import { selectAllTasks } from '../../redux/task/selectors';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const ChoosedMonth = () => {
  const allTasks = useSelector(selectAllTasks);

  moment.updateLocale('en', { week: { dow: 1 } });

  const { currentDate } = useParams();

  const today = moment(currentDate);

  const startDay = today.clone().startOf('month').startOf('week');

  return (
    <div>
      <MonthCalendarHead />
      <CalendarTable tasks={allTasks} today={today} startDay={startDay} />
    </div>
  );
};

export default ChoosedMonth;
