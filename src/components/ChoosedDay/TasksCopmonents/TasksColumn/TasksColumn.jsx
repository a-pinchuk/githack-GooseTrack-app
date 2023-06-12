import { useState } from 'react';
import { AddTasksBth } from '../AddTasksBth/AddTasksBth';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeaderBar';
import { ColumnTasksList } from '../ColumnTasksList/ColumnTasksList';
import { TaskModal } from 'components/TaskModal/TaskModal';

import { TaskItem } from './TasksColumnStyled';

export const TasksColumn = ({ taskData, title, category, toolbarData }) => {
  const [showModal, setShowModal] = useState(false);
  const [task_info, setTask_info] = useState(null);

  const handlerCloseModal = () => {
    setShowModal(false);
  };

  const handlerOpenModal = task => {
    const { _id } = task;
    if (!_id) task.category = category;
    setTask_info(task);
    setShowModal(true);
  };

  return (
    <>
      <TaskItem data-tour="6">
        <ColumnHeadBar title={title} handlerOpenModal={handlerOpenModal} />
        <ColumnTasksList
          toolbarData={toolbarData}
          taskData={taskData}
          handlerOpenModal={handlerOpenModal}
          title={title}
          category={category}
        />
        <AddTasksBth handlerOpenModal={handlerOpenModal} />
      </TaskItem>

      {showModal && (
        <TaskModal
          task_info={task_info}
          handlerCloseModal={handlerCloseModal}
        />
      )}
    </>
  );
};
