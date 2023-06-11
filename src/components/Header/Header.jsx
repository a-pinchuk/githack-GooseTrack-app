import { useLocation } from 'react-router-dom';
import { useTasks } from 'hooks';
import { useState } from 'react';
import { AddFeedbackModal } from 'components/AddFeedbackModal/AddFeedbackModal';

// import './ThemeTogglerColors.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import BtnAddFeedback from './BtnAddFeedback/BtnAddFeedback';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import UserInfo from './UserInfo/UserInfo';

import HeaderGoose from '../../images/header/Goose_header.png'

import {
  HeaderTitle,
  HeaderSection,
  MobileMenuBtn,
  RighSectiontHeader,
  HeaderSectionTask,
  HeaderTaskImg,
  HeaderTaskTitle,
  HeaderTaskParagraph,
  HeaderTaskSpan,
} from './Header.styled';

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
    <HeaderSection>
      <MobileMenuBtn onClick={toogleShowSiderBar}>
        <RxHamburgerMenu size={30}/>
      </MobileMenuBtn>

      {isNotDoneTask ? (
        <HeaderSectionTask>
          <HeaderTaskImg src={HeaderGoose} alt="Header Goose"></HeaderTaskImg>
          <HeaderTaskTitle> 
            Calendar <br/> 
            <HeaderTaskParagraph> <HeaderTaskSpan>Let go</HeaderTaskSpan>   of the past and focus on the present!  </HeaderTaskParagraph>
          </HeaderTaskTitle>
        </HeaderSectionTask>
      ) : (
        <HeaderTitle>
          {typePage === 'acount' ? 'User Profile' : 'Calendar'}
        </HeaderTitle>
      )}

      <RighSectiontHeader>
        <BtnAddFeedback handlerShowModal={handlerShowModal} />

        <ThemeToggler />
        <UserInfo />
      </RighSectiontHeader>
      {showModal && <AddFeedbackModal handlerCloseModal={handlerCloseModal} />}
    </HeaderSection>
  );
};
