import { useState, useEffect, memo } from 'react';
import {
  format,
  formatISO,
  startOfWeek,
  lastDayOfWeek,
  eachDayOfInterval,
} from 'date-fns';
import { useNavigate, useParams } from 'react-router-dom';

import {
  WeeksItem,
  WeeksItemDay,
  WeeksItemCurrent,
  DivGridWeeks,
  WeeksItemDateName,
  SelectedDay,
  NotSelectedDay,
} from './DayCalendarHead.styled';

export const DayCalendarHead = () => {
  const { currentDay: targetDate } = useParams();  
  const navigate = useNavigate();

  const formatofWeek = 'eeee';
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Оновлюємо state `time` при зміні параметра `targetDate`
    const calendarDate = new Date(targetDate);
    setTime(calendarDate);
  }, [targetDate]);

  const startDate = startOfWeek(time, { weekStartsOn: 1 });
  const endDate = lastDayOfWeek(time, { weekStartsOn: 1 });

  const getTotalDate = () => {
    // Отримуємо масив всіх дат у поточному тижні
    return eachDayOfInterval({
      start: startDate,
      end: endDate,
    });
  };

  const totalDate = getTotalDate();

  let longWeeksString = window.innerWidth <= 768 ? 1 : 3;

  const formatDate = date => formatISO(date).slice(0, 10);

  const curenttDayStyle = cureDayStyl => formatDate(cureDayStyl) === targetDate;
  const selectedDay = dayWeeks => formatDate(dayWeeks) === targetDate;
  const handleChangDay = dayData =>
    navigate(`/calendar/day/${formatDate(dayData)}`);

  const renderDayComponent = (week, isSelected) => {
    const dayComponent = curenttDayStyle(week) ? (
      // Відображаємо поточний день з іншим стилем
      <WeeksItemCurrent>{week.getDate()}</WeeksItemCurrent>
    ) : (
      // Відображаємо звичайний день
      <WeeksItemDay>{week.getDate()}</WeeksItemDay>
    );
    return isSelected ? (
      // Додаємо клас "SelectedDay" для виділення обраного дня
      <SelectedDay onClick={() => handleChangDay(week)}>
        {dayComponent}
      </SelectedDay>
    ) : (
      // Додаємо клас "NotSelectedDay" для невиділеного дня
      <NotSelectedDay onClick={() => handleChangDay(week)}>
        {dayComponent}
      </NotSelectedDay>
    );
  };

  const formatWeekName = week =>
    format(week, formatofWeek).substring(0, longWeeksString);

  return (
    <DivGridWeeks>
      {totalDate.map(week => (
        <WeeksItem key={week.getTime()}>
          {/* Відображаємо назву дня тижня */}
          <WeeksItemDateName>{formatWeekName(week)}</WeeksItemDateName>
          {/* Відображаємо компонент дня */}
          {renderDayComponent(week, selectedDay(week))}
        </WeeksItem>
      ))}
    </DivGridWeeks>
  );
};

export default memo(DayCalendarHead);
