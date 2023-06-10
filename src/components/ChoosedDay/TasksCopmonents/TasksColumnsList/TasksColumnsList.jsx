import { TasksColumn } from '../TasksColumn/TasksColumn';
import { StretchContainer, TaskContainer } from './TasksColumnsListStyled';
import { correctTitle } from '../helper/helper';
import { toolTitle } from '../helper/helper';

export const TasksColumnsList = ({ sortedTasksData }) => {
  const { done, inProgress, toDo } = sortedTasksData;

  //Ключи заголовков колонок
  const dataTitle = Object.keys(sortedTasksData);
  // console.log(dataTitle);
  console.log('DATATITLE--->', dataTitle);
  console.log('DATATITLEFunc--->', correctTitle(dataTitle[2]));

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
