import { useState } from 'react';
import {
  TaskHeaderBox,
  TaskHeaderBth,
  TaskHeaderTitle,
} from './ColumnHeadBarStyled';
import { Modal } from 'components/Modal/Modal';

export const ColumnHeadBar = ({ title }) => {
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
  };
  return (
    <TaskHeaderBox>
      <TaskHeaderTitle>{title}</TaskHeaderTitle>;
      <TaskHeaderBth onClick={handleOpenModal}>+</TaskHeaderBth>
      {modal && <Modal />}
    </TaskHeaderBox>
  );
};
