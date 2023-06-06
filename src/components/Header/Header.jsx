import styles from './Header.module.css'
import {RxHamburgerMenu} from 'react-icons/rx';
import BtnAddFeedback from './BtnAddFeedback/BtnAddFeedback';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import UserInfo from './UserInfo/UserInfo';


export const Header = () => {
  return (
    <div className={styles.HeaderSection}>
      <button className={styles.MobileMenuBtn} type="button">
        <RxHamburgerMenu size={30} color='var(--primary-text)'/>
      </button>
  
      <h3 className={styles.HeaderTitle}>Calendar</h3>
      
      <div className={styles.PartRightHeader}>
        <BtnAddFeedback/>
        <ThemeToggler/>
        <UserInfo/>
      </div>
    </div>
  );
};
