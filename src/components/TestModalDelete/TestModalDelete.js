import { useState } from 'react';
import TaskModal from 'components/TaskModal/TaskModal';

// const initialData = {
//   id: 'id-Tasks',
// };

// const initialData = {
//   category: 'in-progress',
// };

const task_info = {
  category: 'in-progress',
};

const TestModalDelete = () => {
  const [showModal, setShowModal] = useState(false);

  const handlerCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <p>TestModalDelete</p>
      <button type="button" onClick={() => setShowModal(true)}>
        Open modal
      </button>
      {showModal && (
        <TaskModal
          task_info={task_info}
          handlerCloseModal={handlerCloseModal}
        />
      )}
    </>
  );
};

export default TestModalDelete;
