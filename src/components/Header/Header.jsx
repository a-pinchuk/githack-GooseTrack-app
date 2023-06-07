import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import { RxHamburgerMenu } from 'react-icons/rx';
import BtnAddFeedback from './BtnAddFeedback/BtnAddFeedback';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import UserInfo from './UserInfo/UserInfo';
import { AddFeedbackModal } from 'components/AddFeedbackModal/AddFeedbackModal';

import './ThemeTogglerColors.css';

import {
  HeaderTitle,
  HeaderSection,
  MobileMenuBtn,
  RighSectiontHeader,
} from './Header.styled';

const getTypePage = pathname => {
  if (pathname.includes('/account')) {
    return 'acount';
  } else if (pathname.includes('/calendar')) {
    return 'calendar';
  }
};

export const Header = ({ toogleShowSiderBar }) => {
  const { pathname } = useLocation();
  const typePage = getTypePage(pathname);

  const [showModal, setShowModal] = useState(false);

  const handlerCloseModal = () => {
    setShowModal(false);
  };

  const handlerShowModal = () => {
    setShowModal(true);
  };

  return (
    <HeaderSection>
      <MobileMenuBtn onClick={toogleShowSiderBar}>
        <RxHamburgerMenu size={30} color="var(--primary-text)" />
      </MobileMenuBtn>

      <HeaderTitle>
        {typePage === 'acount' ? 'User Profile' : 'Calendar'}
      </HeaderTitle>

      <RighSectiontHeader>
        <BtnAddFeedback handlerShowModal={handlerShowModal} />
        <ThemeToggler />
        <UserInfo />
      </RighSectiontHeader>
      {showModal && <AddFeedbackModal handlerCloseModal={handlerCloseModal} />}
    </HeaderSection>
  );
};
