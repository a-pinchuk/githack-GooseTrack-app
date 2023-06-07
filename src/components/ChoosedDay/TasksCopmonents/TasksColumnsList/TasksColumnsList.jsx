import { TasksColumn } from '../TasksColumn/TasksColumn';
import { TaskContainer } from './TasksColumnsListStyled';

export const TasksColumnsList = ({ sortedTasksData }) => {
  // consoles.log('TasksColumnsList component data --->', sortedTasksData);
  const { done, inProgress, toDo } = sortedTasksData;

  //Ключи заголовков колонок
  const dataTitle = Object.keys(sortedTasksData);
  //Функция коррекции заголовков
  const correctTitle = value => {
    if (value === 'done') {
      return value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      const title = value.charAt(0).toUpperCase() + value.slice(1);
      return title.substr(0, 2) + ' ' + title.substr(2, 8).toLowerCase();
    }
  };

  return (
    <TaskContainer>
      <TasksColumn
        toolbarData={[correctTitle(dataTitle[1]), correctTitle(dataTitle[0])]}
        title={correctTitle(dataTitle[2])}
        taskData={toDo}
        category="to-do"
      />
      <TasksColumn
        toolbarData={[correctTitle(dataTitle[0]), correctTitle(dataTitle[2])]}
        title={correctTitle(dataTitle[1])}
        taskData={inProgress}
        category="in-progress"
      />
      <TasksColumn
        toolbarData={[correctTitle(dataTitle[2]), correctTitle(dataTitle[1])]}
        title={correctTitle(dataTitle[0])}
        taskData={done}
        category="done"
      />
    </TaskContainer>
  );
};
