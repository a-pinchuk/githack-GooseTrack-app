import React, { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, CloseButton, ModalContainer } from './Modal.styled';
import { ReactComponent as CloseIcon } from '../../images/x-close.svg';

export const Modal = ({ children, handlerCloseModal }) => {
  const handleKeyDown = useCallback(
    evt => {
      if (evt.code === 'Escape') {
        handlerCloseModal();
      }
    },
    [handlerCloseModal]
  );

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      handlerCloseModal();
    }
  };

  // * useEffect
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return createPortal(
    <>
      <Backdrop onClick={handleBackdropClick}>
        <ModalContainer>
          <CloseButton onClick={handlerCloseModal}>
            <CloseIcon width="24" height="24"></CloseIcon>
          </CloseButton>
          {children}
        </ModalContainer>
      </Backdrop>
    </>,
    document.getElementById('modal-root')
  );
};
