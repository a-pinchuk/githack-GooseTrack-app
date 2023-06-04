import React, { useCallback, useEffect, useMemo } from 'react';
import { Backdrop, CloseButton, ModalContainer } from './Modal.styled';

const modalRootElement = document.getElementById('modal-root');

export const Modal = ({ children, onClose }) => {
  const element = useMemo(() => document.createElement('div'), []);
  useEffect(() => {
    modalRootElement.appendChild(element);
    return () => {
      modalRootElement.removeChild(element);
    };
  });

  const handleModalClose = useCallback(
    event => {
      if (event.target === event.currentTarget || event.keyCode === 27) {
        // Close modal on backdrop click
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleModalClose);

    return () => {
      document.removeEventListener('keydown', handleModalClose);
    };
  }, [handleModalClose]);

  return (
    <>
      <Backdrop onClick={handleModalClose}>
        <ModalContainer>
          <CloseButton onClick={onClose}>
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </CloseButton>
          {children}
        </ModalContainer>
      </Backdrop>
    </>
  );
};

// useEffect(() => {
//   // Add a class to the root element or body to prevent scrolling
//   document.documentElement.style.overflow = 'hidden';

//   // Cleanup function to remove the class on unmount
//   return () => {
//     document.documentElement.style.overflow = '';
//   };
// }, []);
