import { useState } from 'react';
import { ButtonBox, ButtonTask } from './AddTasksBthStyled';
import { Modal } from 'components/Modal/Modal';

export const AddTasksBth = () => {
  const [modal, setModal] = useState(false);
  const handleOpenModal = () => {
    setModal(true);
  };
  return (
    <>
      <ButtonBox onClick={handleOpenModal}>
        <ButtonTask>
          <span>+</span>Add task
        </ButtonTask>
      </ButtonBox>
      {modal && <Modal />}
    </>
  );
};
