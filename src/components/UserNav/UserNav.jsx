import {
  CalendarIconStyled,
  CloseBtnIcon,
  GooseImg,
  LogoWrapper,
  StyledItem,
  StyledLink,
  StyledList,
  TextLogo,
  TextLogoSpan,
  UserIconStyled,
  UserPanel,
} from './UserNav.styled';
import goose from '../../images/sideBar/GOOSE.png';
import { useState } from 'react';

export const UserNav = ({ toogleShowSiderBar }) => {
    const [activeBlock, setActiveBlock] = useState(null);

    const handleBlockClick = block => {
      setActiveBlock(block);
    };
  return (
    <div>
      <LogoWrapper>
        <GooseImg alt="goose-track-img" src={goose}></GooseImg>
        <TextLogo>
          G<TextLogoSpan>oo</TextLogoSpan>seTrack
        </TextLogo>
        <CloseBtnIcon
          onClick={toogleShowSiderBar}
          stroke="currentColor"
        ></CloseBtnIcon>
      </LogoWrapper>
      <nav>
        <UserPanel>User Panel</UserPanel>
        <StyledList>
          <StyledItem
            active={activeBlock === 'block1' ? 'true' : undefined}
            onClick={() => handleBlockClick('block1')}
          >
            <StyledLink
              to="account"
              active={activeBlock === 'block1' ? 'true' : undefined}
              onClick={() => {
                toogleShowSiderBar();
                handleBlockClick('block1');
              }}
            >
              <UserIconStyled stroke="currentColor"></UserIconStyled>
              My account
            </StyledLink>
          </StyledItem>
          <StyledItem
            active={activeBlock === 'block2' ? 'true' : undefined}
            onClick={() => handleBlockClick('block2')}
          >
            <StyledLink
              to="calendar"
              onClick={() => {
                toogleShowSiderBar();
                handleBlockClick('block2');
              }}
              active={activeBlock === 'block2' ? 'true' : undefined}
            >
              <CalendarIconStyled stroke="currentColor"></CalendarIconStyled>
              Calendar
            </StyledLink>
          </StyledItem>
        </StyledList>
      </nav>
    </div>
  );
};
