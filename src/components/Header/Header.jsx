import { useLocation } from 'react-router-dom';
import { useTasks } from 'hooks';
import { useState } from 'react';
import { AddFeedbackModal } from 'components/AddFeedbackModal/AddFeedbackModal';

// import './ThemeTogglerColors.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import BtnAddFeedback from './BtnAddFeedback/BtnAddFeedback';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import UserInfo from './UserInfo/UserInfo';

import {
  HeaderTitle,
  HeaderSection,
  MobileMenuBtn,
  RighSectiontHeader,
} from './Header.styled';
import { GooseTitle } from './GooseTitle/GooseTitle';

const getTypePage = pathname => {
  if (pathname.includes('/account')) {
    return 'acount';
  } else if (pathname.includes('/month')) {
    return 'month';
  } else if (pathname.includes('/day')) {
    return 'day';
  }
};

export const Header = ({ toogleShowSiderBar }) => {
  const { pathname } = useLocation();
  const typePage = getTypePage(pathname);

  const { isNotDoneTask } = useTasks();

  const [showModal, setShowModal] = useState(false);

  const handlerCloseModal = () => {
    setShowModal(false);
  };

  const handlerShowModal = () => {
    setShowModal(true);
  };

  return (
    <HeaderSection showMotivationTitle={typePage === 'day' && isNotDoneTask}>
      <MobileMenuBtn onClick={toogleShowSiderBar}>
        <RxHamburgerMenu size={34} />
      </MobileMenuBtn>

      {typePage === 'day' && isNotDoneTask ? (
        <GooseTitle />
      ) : (
        <HeaderTitle>
          {typePage === 'acount' ? 'User Profile' : 'Calendar'}
        </HeaderTitle>
      )}

      <RighSectiontHeader>
        {typePage !== 'acount' && (
          <BtnAddFeedback handlerShowModal={handlerShowModal} />
        )}

        <ThemeToggler />
        <UserInfo toogleShowSiderBar={toogleShowSiderBar} />
      </RighSectiontHeader>
      {showModal && <AddFeedbackModal handlerCloseModal={handlerCloseModal} />}
    </HeaderSection>
  );
};
