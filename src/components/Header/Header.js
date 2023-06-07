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
import { useLocation } from 'react-router-dom';

const getTypePage = pathname => {
  if (pathname.includes('/account')) {
    return 'acount';
  } else if (pathname.includes('/calendar')) {
    return 'calendar';
  }
};

//todo need to go HandlelShowSider
export const Header = () => {
  const { pathname } = useLocation();
  const typePage = getTypePage(pathname);

  const [showModal, setShowModal] = useState(false);

  const handlerCloseModal = () => {
    setShowModal(false);
  };

  return (
    <WrapHeader>
      <WrapTitleBurger>
        <p>{typePage === 'acount' ? 'User Profile' : 'Calendar'}</p>

        <button type="button">Show Side bar</button>
      </WrapTitleBurger>

      <WrapThemeUserInfo>
        <BtnAddFeedback onClick={() => setShowModal(true)} />

        <ThemeToggler />
        <UserInfo />
      </WrapThemeUserInfo>
      {showModal && <AddFeedbackModal handlerCloseModal={handlerCloseModal} />}
    </WrapHeader>
  );
};
