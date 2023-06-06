import { useState } from 'react';
import TaskModal from 'components/TaskModal/TaskModal';

// const initialData = {
//   id: '647f8c50626766a35b1cd440',
// };

// const initialData = {
//   category: 'in-progress',
// };

const task_info = {
  id: '647f8c50626766a35b1cd440',
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
