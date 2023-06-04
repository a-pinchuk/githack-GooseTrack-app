import { Modal } from 'components/Modal/Modal';
import { TaskForm } from 'components/TaskForm/TaskForm';
import React from 'react';

const TaskModal = ({ initialData, toggleModal }) => {
  return (
    <>
      <Modal toggleModal={toggleModal}>
        <TaskForm
          toggleModal={toggleModal}
          initialData={initialData}
        ></TaskForm>
      </Modal>
    </>
  );
};

export default TaskModal;
