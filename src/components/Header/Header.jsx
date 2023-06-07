import './ThemeTogglerColors.css'
import {RxHamburgerMenu} from 'react-icons/rx';
import BtnAddFeedback from './BtnAddFeedback/BtnAddFeedback';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import UserInfo from './UserInfo/UserInfo';
import { HeaderTitle, HeaderSection, MobileMenuBtn, RighSectiontHeader } from './Header.styled';

export const Header = () => {
  return (
    <HeaderSection>
      <MobileMenuBtn>
        <RxHamburgerMenu size={30} color='var(--primary-text)'/>
      </MobileMenuBtn>
        
      <HeaderTitle>Calendar</HeaderTitle>
      
      <RighSectiontHeader>
        <BtnAddFeedback/>
        <ThemeToggler/>
        <UserInfo/>
      </RighSectiontHeader>
    </HeaderSection>
  );
};
