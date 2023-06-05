import { TasksColumn } from '../TasksColumn/TasksColumn';
import { TaskContainer } from './TasksColumnsListStyled';

export const TasksColumnsList = ({ sortedTasksData }) => {
  console.log('TasksColumnsList', sortedTasksData);
  const { done, inProgress, toDo } = sortedTasksData;

  //----Заглушка
  const title = ['To do', 'In progress', 'Done'];

  return (
    <TaskContainer>
      <TasksColumn title={title[0]} taskData={done} />
      <TasksColumn title={title[1]} taskData={inProgress} />
      <TasksColumn title={title[2]} taskData={toDo} />
    </TaskContainer>
  );
};
