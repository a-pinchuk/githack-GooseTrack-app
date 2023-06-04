import { useDispatch } from "react-redux";
import { BtnLogout, HeroTitle, IconHero, Nav, NavList, StyledLink, TitleUser, WrapAuth, WrapIcon } from "./SideBar.styled";
import { logOut } from "redux/auth/operations";

export const SideBar = () => {
    const dispatch = useDispatch();
      const onBackHome = e => {
        dispatch(logOut());
      };
    return (
      <header>
        <WrapAuth>
          <WrapIcon>
            <IconHero />
            <HeroTitle>GooseTrack</HeroTitle>
          </WrapIcon>
          <TitleUser>User Panel</TitleUser>
          <Nav>
            <NavList>
              <li>
                <StyledLink to="/">My account</StyledLink>
              </li>
              <li>
                <StyledLink to="/contacts">Calendar</StyledLink>
              </li>
            </NavList>
          </Nav>
          <BtnLogout onClick={onBackHome}>Log out</BtnLogout>
        </WrapAuth>
      </header>
    );
}