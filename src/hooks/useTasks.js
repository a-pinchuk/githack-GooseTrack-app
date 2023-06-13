import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { selectAllTasks } from 'redux/task/selectors';
import { fetchAllTasks } from 'redux/task/operations';

export const useTasks = () => {
  const dispatch = useDispatch();
  const { currentDay, currentDate } = useParams();
  const workDate = currentDate || currentDay;

  const [numActiveMonth, setActiveMonth] = useState(null);
  const [isNotDoneTask, setIsNotDoneTask] = useState(false);
  const prevNumMonth = useRef(null);

  const tasks = useSelector(selectAllTasks);
  const fetchTaskById = id => {
    const foundTask = tasks.find(task => task._id === id);
    return foundTask;
  };

  useEffect(() => {
    if (!currentDay) {
      setIsNotDoneTask(false);
      return;
    }

    const foundNotDoneTask = tasks.find(
      elemen => elemen.date === currentDay && elemen.category !== 'done'
    );

    setIsNotDoneTask(!!foundNotDoneTask);
  }, [currentDay, tasks]);

  useEffect(() => {
    if (!workDate) return;

    const month = workDate.split('-')[1];
    setActiveMonth(month);
  }, [workDate]);

  useEffect(() => {
    if (!workDate) return;

    if (prevNumMonth.current !== numActiveMonth) {
      console.log('fetchAllTasks', numActiveMonth, workDate);

      dispatch(fetchAllTasks(workDate));
      prevNumMonth.current = numActiveMonth;
    }
  }, [numActiveMonth, workDate, dispatch]);

  return { tasks, isNotDoneTask, fetchTaskById };
};
