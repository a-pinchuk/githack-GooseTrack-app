import LogoutBtn from 'components/TestBtnLogout/LogoutBtn';
import { UserNav } from 'components/UserNav/UserNav';
import { SideBox } from './SideBar.styled';

export const SideBar = () => {
  return (
    <SideBox>
      <UserNav></UserNav>
      <LogoutBtn></LogoutBtn>
    </SideBox>
  );
};
