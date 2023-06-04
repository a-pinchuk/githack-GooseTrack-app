import React, { useCallback, useEffect, useMemo } from 'react';
import { Backdrop, CloseButton, ModalContainer } from './Modal.styled';

const modalRootElement = document.getElementById('modal-root');

export const Modal = ({ children, toggleModal }) => {
  // useMemo to prevent element creaction every render
  const element = useMemo(() => document.createElement('div'), []);
  // mount element by useEffect
  useEffect(() => {
    modalRootElement.appendChild(element);
    // clear side effect and unmount component
    return () => {
      modalRootElement.removeChild(element);
    };
  });

  // function to close Modal by pressing ESC button or by backdrop click
  const handleModalClose = useCallback(
    event => {
      if (event.target === event.currentTarget || event.keyCode === 27) {
        // Close modal on backdrop click
        toggleModal();
      }
    },
    [toggleModal]
  );
  // useEffect to close Modal by pressing ESC button
  useEffect(() => {
    document.addEventListener('keydown', handleModalClose);
    return () => {
      document.removeEventListener('keydown', handleModalClose);
    };
  }, [handleModalClose]);

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    // Add a class to the root element or body to prevent scrolling
    // Cleanup function to remove the class on unmount
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <>
      <Backdrop onClick={handleModalClose}>
        <ModalContainer>
          <CloseButton onClick={toggleModal}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#111111"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#111111"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CloseButton>
          {children}
        </ModalContainer>
      </Backdrop>
    </>
  );
};
