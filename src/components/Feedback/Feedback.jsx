import React, { useState, useRef } from 'react';
import { Rating } from 'react-simple-star-rating';
import { createPortal } from 'react-dom';
import {
  ModalOverlay,
  ModalContent,
  Container,
  TitleRating,
  CloseModal,
  TitleReview,
  Placeholder,
  TextReview,
  BtnSave,
  TextSave,
} from './Feedback.styled';

const Modal = ({ children, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef();

  const closeModal = e => {
    if (e.target === modalRef.current) {
      setIsOpen(false);
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <ModalOverlay ref={modalRef} onClick={closeModal}>
      <ModalContent>{children}</ModalContent>
    </ModalOverlay>,
    document.body
  );
};

const Feedback = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [rating, setRating] = useState(0);
  const handleRating = rate => {
    setRating(rate);
  };

  return (
    <div className="container">
      <button onClick={openModal}>Feedback</button>

      {isModalOpen && (
        <Modal style={{ display: 'block', width: 335 }} onClose={closeModal}>
          <Container>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <TitleRating>Rating</TitleRating>
              <CloseModal onClick={closeModal}>×</CloseModal>
            </div>
            <div>
              <Rating
                onClick={handleRating}
                ratingValue={rating}
                size={20}
                label
                transition
                fillColor="orange"
                emptyColor="gray"
                className="foo"
              />
            </div>
            <TitleReview>Review</TitleReview>
            <Placeholder>
              <TextReview>Enter text</TextReview>
            </Placeholder>
            <BtnSave>
              <TextSave>Save</TextSave>
            </BtnSave>
          </Container>
        </Modal>
      )}
    </div>
  );
};

export default Feedback;
