import { AddTasksBth } from '../AddTasksBth/AddTasksBth';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeaderBar';
import { ColumnTasksList } from '../ColumnTasksList/ColumnTasksList';

import { TaskItem } from '../TasksColumn/TasksColumnStyled';

export const TasksColumn = ({ taskData, title }) => {
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
