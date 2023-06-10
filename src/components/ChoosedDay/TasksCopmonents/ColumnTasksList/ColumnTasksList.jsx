import { useEffect, useRef, useState } from 'react';
import { TaskColumnCard } from '../TaskColumnCard/TaskColumnCard';
import { TaskListBox } from './ColumnTasksListStyled';
import { correctTitle } from '../helper/helper';
export const ColumnTasksList = ({
  toolbarData,
  taskData,
  handlerOpenModal,
  title,
}) => {
  const [disableDrag, setDisableDrag] = useState(true);
  console.log(taskData, title);
  const handleScroll = () => {};
  const handleDisableScrollBar = () => {
    setDisableDrag(false);
  };
  const handleEnableScrollBar = () => {
    setDisableDrag(true);
  };
  return (
    <>
      <TaskListBox style={{ touchAction: disableDrag ? 'auto' : 'none' }}>
        {taskData?.map(item => {
          return (
            <TaskColumnCard
              onClick={handleScroll}
              disableDrag={handleDisableScrollBar}
              enableDrag={handleEnableScrollBar}
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
