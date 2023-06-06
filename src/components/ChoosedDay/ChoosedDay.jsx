import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectAllTasks } from 'redux/task/selectors';
import { Container } from './ChoosedDay.styled';
import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';
import { TasksColumnsList } from './TasksCopmonents/TasksColumnsList/TasksColumnsList';
import { useParams } from 'react-router-dom';

const ChoosedDay = () => {
  const { currentDay: targetDate } = useParams();
  const tasks = useSelector(selectAllTasks);

  const [sortedTasks, setSortedTasks] = useState(null);
  console.log('Component ChoosedDay - sortedTasks : ', sortedTasks);

  // Функція для сортування масиву за полем "date"
  function sortByDate(array) {
    return array.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  // Функція для фільтрації масиву об'єктів за конкретним днем
  function filterByDate(array, targetDate) {
    return array.filter(item => item.date === targetDate);
  }

  useEffect(() => {
    // Оновлена функція для отримання трьох масивів об'єктів за категорією та відсортованих за датою
    function getCategorizedArrays(data, targetDate) {
      const filteredData = filterByDate(data, targetDate);

      const doneArray = [];
      const inProgressArray = [];
      const toDoArray = [];

      for (const item of filteredData) {
        if (item.category === 'done') {
          doneArray.push(item);
        } else if (item.category === 'in-progress') {
          inProgressArray.push(item);
        } else if (item.category === 'to-do') {
          toDoArray.push(item);
        }
      }

      return {
        done: sortByDate(doneArray),
        inProgress: sortByDate(inProgressArray),
        toDo: sortByDate(toDoArray),
      };
    }
    console.log('getCategorizedArrays fucn data ---> ', tasks);

    if (tasks && tasks.length > 0) {
      const categorizedArrays = getCategorizedArrays(tasks, targetDate);
      setSortedTasks(categorizedArrays);
    }
  }, [targetDate, tasks]);

  return (
    <div className={Container}>
      <DayCalendarHead />
      {sortedTasks && <TasksColumnsList sortedTasksData={sortedTasks} />}
    </div>
  );
};

export default ChoosedDay;
