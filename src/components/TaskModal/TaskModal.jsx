import { Modal } from 'components/Modal/Modal';
import { TaskForm } from 'components/TaskForm/TaskForm';
import React from 'react';

// const initialData = {};

const TaskModal = ({ initialData, handlerCloseModal }) => {
  return (
    <>
      <Modal handlerCloseModal={handlerCloseModal}>
        <TaskForm initialData={(initialData, handlerCloseModal)}></TaskForm>
      </Modal>
    </>
  );
};

export default TaskModal;
