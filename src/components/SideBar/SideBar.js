import LogoutBtn from 'components/BtnLogout/LogoutBtn';
import { UserNav } from 'components/UserNav/UserNav';

import { SideBox } from './SideBar.styled';

export const SideBar = ({ toogleShowSiderBar }) => {
  return (
    <SideBox>
      <UserNav toogleShowSiderBar={toogleShowSiderBar} />
      <LogoutBtn />
    </SideBox>
  );
};
