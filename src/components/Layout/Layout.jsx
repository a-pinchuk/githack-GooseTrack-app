import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
// import { Modal } from 'components/Modal/Modal';
import React from 'react';
// import { TaskForm } from 'components/TaskForm/TaskForm';

const Layout = () => {
  // const [isModalOpen, setIsModalOpen] = React.useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <>
      <Container>
        <h1>githack-GooseTrack</h1>
        {/* <div>
          <button onClick={openModal}>Open Modal</button>
          {isModalOpen && (
            <Modal onClose={closeModal}>
              <TaskForm></TaskForm>
            </Modal>
          )}
        </div> */}
        {/* <main>{<Outlet />}</main> */}
      </Container>
    </>
  );
};

export default Layout;
