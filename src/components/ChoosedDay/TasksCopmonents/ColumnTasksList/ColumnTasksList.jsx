import { useEffect, useState } from 'react';
import { TaskColumnCard } from '../TaskColumnCard/TaskColumnCard';
import { TaskListBox } from './ColumnTasksListStyled';
import { useDispatch } from 'react-redux';
import { changeTaskCategory } from 'redux/task/operations';
import { ItemTypes } from '../helper/Items';
import { useDrop } from 'react-dnd';
import { theme } from 'theme';

// import { correctTitle } from '../helper/helper';
export const ColumnTasksList = ({
  toolbarData,
  taskData,
  handlerOpenModal,
  category,
  // title,
}) => {
  const [disableDrag, setDisableDrag] = useState(true);
  const dispatch = useDispatch();

  const dragItem = id => {
    switch (category) {
      case 'in-progress':
        return dispatch(
          changeTaskCategory({
            id: id,
            category: 'in-progress',
          })
        );
      case 'done':
        return dispatch(
          changeTaskCategory({
            id: id,
            category: 'done',
          })
        );
      case 'to-do':
        return dispatch(
          changeTaskCategory({
            id: id,
            category: 'to-do',
          })
        );
      default:
        return;
    }
  };

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => dragItem(item.id),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const handleDisableScrollBar = () => {
    setDisableDrag(false);
  };
  const handleEnableScrollBar = () => {
    setDisableDrag(true);
  };

  useEffect(() => {
    const handleWindowWheel = e => {
      if (!disableDrag) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWindowWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWindowWheel);
    };
  }, [disableDrag]);
  return (
    <>
      <TaskListBox
        ref={drop}
        style={{
          touchAction: disableDrag ? 'auto' : 'none',
          borderRadius: isOver ? '8px' : 'none',
          background: isOver ? `${theme.colors.background_mode}` : 'none',
          boxShadow: isOver
            ? `inset 7px 0px ${theme.colors.third_background_mode}`
            : 'none',
        }}
      >
        {taskData?.map(item => {
          return (
            <TaskColumnCard
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
