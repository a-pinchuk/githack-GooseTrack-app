import { Modal } from 'components/Modal/Modal';
import { TaskForm } from 'components/TaskForm/TaskForm';
import React from 'react';
import ReactDOM from 'react-dom';
import { Outlet } from 'react-router-dom';

const TaskModal = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return ReactDOM.createPortal(
    <div>
      <button onClick={openModal}>Open Modal</button>
      {/* {isModalOpen && (
        <Modal onClose={closeModal}>
          <TaskForm></TaskForm>
        </Modal>
      )} */}
    </div>,
    document.getElementById('modal-root')
  );
};

export default TaskModal;
