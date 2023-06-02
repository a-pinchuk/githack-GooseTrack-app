import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllTasks } from 'redux/task/selectors';
import { useEffect } from 'react';
import {
  addTasks,
  changeTasksCategory,
  deleteTasks,
  fetchTasks,
  fetchTasksById,
  updateTasks,
} from 'redux/task/operations';

const Layout = () => {
  const tasks = useSelector(selectAllTasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  const id = '647a36e401a3371dd3c043a4';
  console.log(tasks);
  return (
    <>
      <Container>
        <h1>githack-GooseTrack</h1>
        <main>
          <Outlet />
        </main>
      </Container>
      <button
        onClick={() =>
          dispatch(
            addTasks({
              title: 'My task  low done 14:38-15:07',
              date: '2023-06-01',
              start: '14:38',
              end: '15:07',
              priority: 'low',
              category: 'done',
            })
          )
        }
      >
        get tasks
      </button>
    </>
  );
};

export default Layout;
