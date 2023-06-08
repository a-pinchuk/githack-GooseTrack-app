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

  useEffect(() => {
    if (!workDate) setIsNotDoneTask(false);

    const foundNotDoneTask = tasks.find(
      elemen => elemen.date === workDate && elemen.category !== 'done'
    );
    setIsNotDoneTask(!!foundNotDoneTask);
  }, [workDate, tasks]);

  useEffect(() => {
    if (!workDate) return;

    const month = workDate.split('-')[1];
    setActiveMonth(month);
  }, [workDate]);

  useEffect(() => {
    if (prevNumMonth.current !== numActiveMonth || !numActiveMonth) {
      dispatch(fetchAllTasks(workDate));
      prevNumMonth.current = numActiveMonth;
    }
  }, [numActiveMonth, workDate, dispatch]);

  return { tasks, isNotDoneTask };
};
