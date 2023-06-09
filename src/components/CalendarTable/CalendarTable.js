import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import {
  CalendarGridWrapper,
  RowInCeil,
  DayWrapper,
  CurrentDay,
  ShowDayWrapper,
  TaskList,
  TaskItem,
  HiddenTaskCount,
} from './CalendarTable.styled';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { theme } from 'theme';

const DayLink = styled(Link)`
  position: relative;
  /* min-width: 47px; */
  padding: 5px 2px;
  overflow: hidden;

  text-decoration: none;

  background-color: ${p => p.theme.colors.second_backgrond_mode};
  /* border: ${p => p.theme.colors.calendar_out_border}; */

  /* color: ${props => props.color}; */

  transition-property: all;
  transition-duration: 100ms;
  transition-timing-function: linear;

  :hover {
    transform: scale(1.05);
    z-index: 1;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }

  @media screen and (min-width: 768px) {
    /* min-width: calc(100px-6px); */
    padding: 8px 4px 2px;
  }

  @media screen and (min-width: 1440px) {
    padding: 14px 8px 2px;
  }
`;

export const CalendarTable = ({ startDay, today, tasks }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  // const isDesktop = useMediaQuery({ minWidth: 1440 });

  const [maxVisibleTasks, setMaxVisibleTasks] = useState(0);
  // const [hiddenTaskCount, setHiddenTaskCount] = useState(0);
  const dayLinkRef = useRef(null);

  useEffect(() => {
    if (dayLinkRef.current) {
      const dayLinkHeight = dayLinkRef.current.clientHeight;

      const taskItemHeight = isMobile ? 25 : isTablet ? 28 : 33; // Замініть на відповідну висоту TaskItem
      const maxVisible = Math.floor((dayLinkHeight - 10 - 20) / taskItemHeight);
      setMaxVisibleTasks(maxVisible);
    }
  }, [isMobile, isTablet]);

  const totalDays = 42;

  let maxLengthOfTaskTitle = null;

  if (isMobile) {
    maxLengthOfTaskTitle = 3;
  } else if (isTablet) {
    maxLengthOfTaskTitle = 6;
  } else {
    maxLengthOfTaskTitle = 12;
  }

  const cutString = str => {
    if (str.length > maxLengthOfTaskTitle) {
      return str.substring(0, maxLengthOfTaskTitle) + '...';
    }
    return str;
  };

  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const isCurrentDay = day => moment().isSame(day, 'day');
  const isSelectedMonth = day => {
    return today.isSame(day, 'month');
  };

  const filterTask = calendarDay => {
    if (!tasks || tasks.length === 0) {
      return [];
    }
    let dayTasksFiltered = [
      ...tasks.filter(task => task.date === calendarDay.format('YYYY-MM-DD')),
    ];
    return dayTasksFiltered;
  };

  return (
    <CalendarGridWrapper data-tour="4">
      {daysArray.map(dayItem => {
        const dayTasks = filterTask(dayItem); // Получаем отфильтрованные задачи для данного дня
        const visibleTasks = dayTasks.slice(0, maxVisibleTasks);
        const hiddenTask = dayTasks.length - visibleTasks.length;

        return (
          <DayLink
            ref={dayLinkRef}
            to={`/calendar/day/${dayItem.format('YYYY-MM-DD')}`}
            key={dayItem.format('DDMMYYYY')}
          >
            <RowInCeil justifyContent={'flex-end'}>
              {hiddenTask > 0 && (
                <HiddenTaskCount>+{hiddenTask}</HiddenTaskCount>
              )}
              <ShowDayWrapper>
                <DayWrapper>
                  {!isCurrentDay(dayItem) ? (
                    <span
                      style={{
                        color: `${
                          isSelectedMonth(dayItem)
                            ? `${theme.colors.third_text_mode}`
                            : '#A9A9A9'
                        }`,
                      }}
                    >
                      {dayItem.format('D')}
                    </span>
                  ) : (
                    <CurrentDay>{dayItem.format('D')}</CurrentDay>
                  )}
                </DayWrapper>
              </ShowDayWrapper>
            </RowInCeil>
            {visibleTasks.length > 0 && (
              <TaskList>
                {visibleTasks.map(
                  (
                    task // Используем отфильтрованные задачи здесь
                  ) => (
                    <TaskItem key={task._id} priority={task.priority}>
                      {cutString(task.title)}
                    </TaskItem>
                  )
                )}
              </TaskList>
            )}
          </DayLink>
        );
      })}
    </CalendarGridWrapper>
  );
};
