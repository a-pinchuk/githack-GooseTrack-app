import './ThemeTogglerColors.css';
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
import { useDispatch } from 'react-redux';
import { toggleSidebar } from 'redux/sidebar/sidebarSlice';

export const Header = () => {
  const dispatch = useDispatch();

  // const isOpen = useSelector(state => state.sidebar.isOpen);

  const handleSideBar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <HeaderSection>
      <MobileMenuBtn onClick={handleSideBar}>
        <RxHamburgerMenu size={30} color="var(--primary-text)" />
      </MobileMenuBtn>

      <HeaderTitle>Calendar</HeaderTitle>

      <RighSectiontHeader>
        <BtnAddFeedback />
        <ThemeToggler />
        <UserInfo />
      </RighSectiontHeader>
    </HeaderSection>
  );
};
