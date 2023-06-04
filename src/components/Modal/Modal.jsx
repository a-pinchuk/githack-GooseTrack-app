import { useCallback, useEffect } from 'react';
import { Backdrop, CloseButton, ModalContainer } from './Modal.styled';

export const Modal = ({ onClose, children }) => {
  const handleKeyPress = useCallback(
    event => {
      if (event.keyCode === 27) {
        // Close modal on Escape key press
        onClose();
      }
    },
    [onClose]
  );

  const handleBackdropClick = useCallback(
    event => {
      if (event.target === event.currentTarget) {
        // Close modal on backdrop click
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    // Add a class to the root element or body to prevent scrolling
    document.documentElement.style.overflow = 'hidden';

    // Cleanup function to remove the class on unmount
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <Backdrop onClick={handleBackdropClick}>
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
  );
};
