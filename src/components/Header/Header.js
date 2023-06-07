import { useState } from 'react';
import { BtnAddFeedback } from 'components/BtnAddFeedback/BtnAddFeedback';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { AddFeedbackModal } from 'components/AddFeedbackModal/AddFeedbackModal';

import {
  WrapHeader,
  WrapTitleBurger,
  WrapThemeUserInfo,
} from './Header.styled';

//todo need to go HandlelShowSider
export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handlerCloseModal = () => {
    setShowModal(false);
  };

  return (
    <WrapHeader>
      <WrapTitleBurger>
        <p>Title</p>
        <BtnAddFeedback />
      </WrapTitleBurger>

      <WrapThemeUserInfo>
        <button type="button" onClick={() => setShowModal(true)}>
          Feedback
        </button>
        <ThemeToggler />
        <UserInfo />
      </WrapThemeUserInfo>
      {showModal && <AddFeedbackModal handlerCloseModal={handlerCloseModal} />}
    </WrapHeader>
  );
};
