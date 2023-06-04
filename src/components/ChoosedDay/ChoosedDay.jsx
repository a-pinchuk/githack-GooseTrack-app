import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectAllTasks } from 'redux/task/selectors';
import {
  DateToday,
  PeriodPaginator,
  Container,
  Container1,
  Container2,
  Viue,
  ViueLink,
  ButtonChangeLeft,
  ButtonChangeRight,
  ButtonLeft,
  ButtonRight,
} from './ChoosedDay.styled';

export const ChoosedDay = () => {
  // const { currentDay: targetDate } = useParams();
  const targetDate = '2023-06-01';
  const tasks = useSelector(selectAllTasks);
  const [sortedTasks, setSortedTasks] = useState(null);

  // ----------------------------------------------------------------
  // Функція для завантаження даних з URL
  // async function loadData(url) {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   return data.data;
  // }

  // Функція для сортування масиву за полем "date"
  function sortByDate(array) {
    return array.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  // Функція для фільтрації масиву об'єктів за конкретним днем
  function filterByDate(array, targetDate) {
    return array.filter(item => item.date === targetDate);
  }

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
      'in-progress': sortByDate(inProgressArray),
      'to-do': sortByDate(toDoArray),
    };
  }

  // Завантаження даних та отримання відсортованих масивів за конкретним днем
  useEffect(() => {
    console.log(tasks);

    const categorizedArrays = getCategorizedArrays(tasks, targetDate);
    console.log(categorizedArrays);
    setSortedTasks(categorizedArrays);
  }, []);

  // loadData('https://githack-goosetrack.onrender.com/api/tasks')
  //   .then(() => {
  //     const categorizedArrays = getCategorizedArrays(tasks, targetDate);
  //     console.log(categorizedArrays);
  //   })
  //   .catch(error => {
  //     console.error('Помилка завантаження даних:', error);
  //   });

  return (
    <div className={Container}>
      <div className={Container1}>WeeksHeader</div>
      <div className={Container2}>TaskColumnsList</div>
    </div>
  );
};
