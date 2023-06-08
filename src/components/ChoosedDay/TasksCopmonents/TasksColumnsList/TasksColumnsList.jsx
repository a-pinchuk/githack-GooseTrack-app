import { TasksColumn } from '../TasksColumn/TasksColumn';
import { StretchContainer, TaskContainer } from './TasksColumnsListStyled';

export const TasksColumnsList = ({ sortedTasksData }) => {
  const { done, inProgress, toDo } = sortedTasksData;

  //Ключи заголовков колонок
  const dataTitle = Object.keys(sortedTasksData);
  // console.log(dataTitle);

  //Функция коррекции заголовков
  const correctTitle = value => {
    if (value === 'done') {
      return value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      const title = value.charAt(0).toUpperCase() + value.slice(1);
      return title.substr(0, 2) + ' ' + title.substr(2, 8).toLowerCase();
    }
  };
  //Функция коррекции для тулбра (запрос на бек)
  const toolTitle = value => {
    if (value === 'done') {
      return value;
    }
    return value.substr(0, 2) + '-' + value.substr(2, 8).toLowerCase();
  };
  // console.log(toolTitle(dataTitle[0]));

  return (
    <TaskContainer>
      <StretchContainer>
        <TasksColumn
          toolbarData={[toolTitle(dataTitle[1]), toolTitle(dataTitle[0])]}
          title={correctTitle(dataTitle[2])}
          taskData={toDo}
          category="to-do"
        />
        <TasksColumn
          toolbarData={[toolTitle(dataTitle[0]), toolTitle(dataTitle[2])]}
          title={correctTitle(dataTitle[1])}
          taskData={inProgress}
          category="in-progress"
        />
        <TasksColumn
          toolbarData={[toolTitle(dataTitle[2]), toolTitle(dataTitle[1])]}
          title={correctTitle(dataTitle[0])}
          taskData={done}
          category="done"
        />
      </StretchContainer>
    </TaskContainer>
  );
};
