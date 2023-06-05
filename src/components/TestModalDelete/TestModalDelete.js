import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllTasks } from 'redux/task/operations';
import { refreshUser } from 'redux/auth/operations';

const TestModalDelete = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatc = useDispatch();

  const handlerCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <p>TestModalDelete</p>
      <button
        type="button"
        onClick={() => {
          dispatc(refreshUser());
          // dispatc(fetchAllTasks());
        }}
      >
        dispatc modal
      </button>

      <button type="button" onClick={() => setShowModal(true)}>
        Open modal
      </button>
      {showModal && (
        <Modal handlerCloseModal={handlerCloseModal}>
          <p> This is MODAL!!!!</p>
        </Modal>
      )}
    </>
  );
};

export default TestModalDelete;
