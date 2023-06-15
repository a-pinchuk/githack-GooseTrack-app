import React, { useState } from 'react';

import { Modal } from 'components/Modal/Modal';
import { TeamCards } from './TeamCards';

import { FooterStyled, TeamLink, ModalContent } from './Footer.styled';

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <FooterStyled>
        <p>© 2023 | All Rights Reserved |</p>
        &nbsp;Developed by
        <TeamLink onClick={toggleModal}>"DigitalGoose"</TeamLink>
      </FooterStyled>

      {isModalOpen && (
        <Modal handlerCloseModal={toggleModal}>
          <ModalContent>
            <h2>DigitalGoose team</h2>
            <TeamCards />
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
