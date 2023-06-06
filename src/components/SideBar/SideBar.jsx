import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { useState } from "react";
import { Calendar } from 'images/icons/Calendar';
import { UserIcon } from 'images/icons/UserIcon';
import {
  WrapAuth,
  BtnLogout,
  TitleUser,
  NavList,
  Nav,
  WrapIcon,
  HeroTitle,
  StyledLink,
  LinkWrapper,
  MobileMenu,
  MobileContainer,
  ButtonClose,
  NavWrappText,
} from './SideBar.styled';
import { LogoutIcon } from 'images/icons/LogoutIcon';
import goose1pxDesck from 'images/imagesGoose/goose1pxDescktop.png';
import goose2pxDesck from 'images/imagesGoose/goose2pxDescktop.png';
import goose1pxTable from 'images/imagesGoose/goose1pxTable.png';
import goose2pxTable from 'images/imagesGoose/goose2pxTable.png';
import goose1pxMobile from 'images/imagesGoose/goose1pxMobile.png';
import goose2pxMobile from 'images/imagesGoose/goose2pxMobile.png';
import { Close } from '@mui/icons-material';
export const SideBar = () => {
    const [activeBlock, setActiveBlock] = useState(null);

    const handleBlockClick = block => {
      setActiveBlock(block);
    };
    const dispatch = useDispatch();
      const onBackHome = e => {
        dispatch(logOut());
      };
    return (
      <header>
        <MobileMenu>
          <MobileContainer>
            <WrapIcon>
              <picture>
                <source
                  srcset={`${goose1pxTable},${goose2pxTable}`}
                  media="(min-width:768px)"
                />
                <source
                  srcset={`${goose1pxMobile},${goose2pxMobile}`}
                  media="(max-width:768px)"
                />
                <img src={goose1pxMobile} alt="Goose" width="36" height="35" />
              </picture>
              <HeroTitle>GooseTrack</HeroTitle>
              <ButtonClose>
                <Close />
              </ButtonClose>
            </WrapIcon>
            <NavWrappText>
              <TitleUser>User Panel</TitleUser>
              <Nav>
                <NavList>
                  <li>
                    <LinkWrapper
                      active={activeBlock === 'block1'}
                      onClick={() => handleBlockClick('block1')}
                    >
                      <UserIcon />
                      <StyledLink
                        to="/contacts"
                        active={activeBlock === 'block1'}
                        onClick={() => handleBlockClick('block1')}
                      >
                        My account
                      </StyledLink>
                    </LinkWrapper>
                  </li>
                  <li>
                    <LinkWrapper
                      active={activeBlock === 'block2'}
                      onClick={() => handleBlockClick('block2')}
                    >
                      <Calendar />
                      <StyledLink
                        to="/"
                        active={activeBlock === 'block2'}
                        onClick={() => handleBlockClick('block2')}
                      >
                        Calendar
                      </StyledLink>
                    </LinkWrapper>
                  </li>
                </NavList>
              </Nav>
            </NavWrappText>
            <BtnLogout>
              Log out <LogoutIcon />
            </BtnLogout>
          </MobileContainer>
        </MobileMenu>
        <WrapAuth>
          <WrapIcon>
            {/* <img src={`${goose1pxDesck}`} alt="goose"></img> */}
            <picture>
              <source
                srcset={`${goose1pxDesck},${goose2pxDesck}`}
                media="(min-width:1200px)"
              />
              <source
                srcset={`${goose1pxTable},${goose2pxTable}`}
                media="(min-width:768px)"
              />
              <source
                srcset={`${goose1pxMobile},${goose2pxMobile}`}
                media="(max-width:768px)"
              />
              <img src={goose1pxMobile} alt="Goose" width="36" height="35" />
            </picture>
            <HeroTitle>GooseTrack</HeroTitle>
          </WrapIcon>
          <TitleUser>User Panel</TitleUser>
          <Nav>
            <NavList>
              <li>
                <LinkWrapper
                  active={activeBlock === 'block1'}
                  onClick={() => handleBlockClick('block1')}
                >
                  <UserIcon />
                  <StyledLink
                    to="/contacts"
                    active={activeBlock === 'block1'}
                    onClick={() => handleBlockClick('block1')}
                  >
                    My account
                  </StyledLink>
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper
                  active={activeBlock === 'block2'}
                  onClick={() => handleBlockClick('block2')}
                >
                  <Calendar />
                  <StyledLink
                    to="/"
                    active={activeBlock === 'block2'}
                    onClick={() => handleBlockClick('block2')}
                  >
                    Calendar
                  </StyledLink>
                </LinkWrapper>
              </li>
            </NavList>
          </Nav>
          <BtnLogout>
            Log out <LogoutIcon />
          </BtnLogout>
        </WrapAuth>
      </header>
    );
}