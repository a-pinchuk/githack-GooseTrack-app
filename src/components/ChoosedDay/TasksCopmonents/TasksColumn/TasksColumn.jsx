import { AddTasksBth } from '../AddTasksBth/AddTasksBth';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeaderBar';
import { ColumnTasksList } from '../ColumnTasksList/ColumnTasksList';

import { TaskItem } from './TasksColumnStyled';

export const TasksColumn = ({ taskData, title }) => {
  console.log('TasksColumn component data ---> ', taskData);
  return (
    <>
      <TaskItem>
        <ColumnHeadBar title={title} />
        <ColumnTasksList
          toolbarData={['In progres', 'Done']}
          taskData={taskData}
        />
        <AddTasksBth />
      </TaskItem>
    </>
  );
};
