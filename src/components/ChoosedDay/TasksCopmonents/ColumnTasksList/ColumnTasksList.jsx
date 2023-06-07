import { TaskColumnCard } from '../TaskColumnCard/TaskColumnCard';
import { TaskListBox } from './ColumnTasksListStyled';

export const ColumnTasksList = ({
  toolbarData,
  taskData,
  handlerOpenModal,
}) => {
  return (
    <>
      <TaskListBox>
        {taskData?.map(item => {
          return (
            <TaskColumnCard
              key={item._id}
              item={item}
              toolbarData={toolbarData}
              data={taskData}
              handlerOpenModal={handlerOpenModal}
            />
          );
        })}
      </TaskListBox>
    </>
  );
};
