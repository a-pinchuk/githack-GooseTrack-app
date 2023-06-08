import LogoutBtn from 'components/TestBtnLogout/LogoutBtn';
import { UserNav } from 'components/UserNav/UserNav';
import { LogoSiderBar } from 'components/LogoSiderBar/LogoSiderBar';
import { SideBox, ButtonCloseBar } from './SideBar.styled';

export const SideBar = ({ toogleShowSiderBar }) => {
  return (
    <SideBox>
      <div>
        <LogoSiderBar />
        <ButtonCloseBar type="button" onClick={toogleShowSiderBar}>
          X
        </ButtonCloseBar>
        <UserNav />
      </div>

      <LogoutBtn />
    </SideBox>
  );
};
