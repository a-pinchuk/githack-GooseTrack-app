import { TasksColumn } from '../TasksColumn/TasksColumn';
import { TaskContainer } from './TasksColumnsListStyled';

export const TasksColumnsList = ({ sortedTasksData }) => {
  //   console.log('TasksColumnsList component data --->', sortedTasksData);
  const titleDone = sortedTasksData.done[0].category;

  const titleInProgress = sortedTasksData.inProgress[0].category.replace(
    '-',
    ' '
  );
  const titleToDo = sortedTasksData.toDo[0].category.replace('-', ' ');

  const { done, inProgress, toDo } = sortedTasksData;

  return (
    <TaskContainer>
      <TasksColumn title={titleToDo} taskData={done} />
      <TasksColumn title={titleInProgress} taskData={inProgress} />
      <TasksColumn title={titleDone} taskData={toDo} />
    </TaskContainer>
  );
};
