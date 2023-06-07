import { TasksColumn } from '../TasksColumn/TasksColumn';
import { TaskContainer } from './TasksColumnsListStyled';

export const TasksColumnsList = ({ sortedTasksData }) => {
  // consoles.log('TasksColumnsList component data --->', sortedTasksData);
  const { done, inProgress, toDo } = sortedTasksData;

  //----Заглушка
  const title = ['To do', 'In progress', 'Done'];

  return (
    <TaskContainer>
      <TasksColumn title={title[0]} taskData={done} category="to-do" />
      <TasksColumn
        title={title[1]}
        taskData={inProgress}
        category="in-progress"
      />
      <TasksColumn title={title[2]} taskData={toDo} category="done" />
    </TaskContainer>
  );
};
