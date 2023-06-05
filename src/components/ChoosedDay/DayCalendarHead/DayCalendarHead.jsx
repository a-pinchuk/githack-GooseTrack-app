import { useState, useEffect, memo } from 'react';
import {
  WeeksItem,
  WeeksItemDay,
  WeeksItemCurrent,
  DivGridWeeks,
  WeeksItemDateName,
  SelectedDay,
  NotSelectedDay,
} from './DayCalendarHead.styled';

import * as dateFns from 'date-fns';
import { useNavigate, useParams } from 'react-router-dom';

export const DayCalendarHead = () => {
  const { currentDay: targetDate } = useParams();
  console.log(targetDate);
  const navigate = useNavigate();
  // const targetDate = '2023-05-31';

  const formatofWeek = 'eeee';
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const calendarDate = new Date(targetDate);
    setTime(calendarDate);
  }, [targetDate]);

  const startDate = dateFns.startOfWeek(time, { weekStartsOn: 1 });
  const endDate = dateFns.lastDayOfWeek(time, { weekStartsOn: 1 });

  const getTotalDate = () => {
    return dateFns.eachDayOfInterval({
      start: startDate,
      end: endDate,
    });
  };

  const totalDate = getTotalDate();

  let longWeeksString = window.innerWidth <= 768 ? 1 : 3;

  const curenttDayStyle = cureDayStyl => {
    const formattedDate = dateFns.formatISO(cureDayStyl).slice(0, 10);
    return formattedDate === targetDate;
  };

  const selectedDay = dayWeeks => {
    const formattedDate = dateFns.formatISO(dayWeeks).slice(0, 10);
    return formattedDate === targetDate;
  };

  const handleChangDay = dayData =>
    navigate(`/calendar/day/${dateFns.formatISO(dayData).slice(0, 10)}`);

  return (
    <DivGridWeeks>
      {totalDate.map(week => (
        <WeeksItem key={week.getTime()}>
          <WeeksItemDateName>
            {dateFns.format(week, formatofWeek).substring(0, longWeeksString)}
          </WeeksItemDateName>
          {selectedDay(week) ? (
            <SelectedDay onClick={() => handleChangDay(week)}>
              {curenttDayStyle(week) ? (
                <WeeksItemCurrent>{week.getDate()}</WeeksItemCurrent>
              ) : (
                <WeeksItemDay>{week.getDate()}</WeeksItemDay>
              )}
            </SelectedDay>
          ) : (
            <NotSelectedDay onClick={() => handleChangDay(week)}>
              {curenttDayStyle(week) ? (
                <WeeksItemCurrent>{week.getDate()}</WeeksItemCurrent>
              ) : (
                <WeeksItemDay>{week.getDate()}</WeeksItemDay>
              )}
            </NotSelectedDay>
          )}
        </WeeksItem>
      ))}
    </DivGridWeeks>
  );
};

export default memo(DayCalendarHead);
