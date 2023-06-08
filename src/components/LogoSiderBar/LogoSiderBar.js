import goose from '../../images/sideBar/GOOSE.png';
import { TextLogo, TextLogoSpan, NavLinkCalendar } from './LogoSiderBar.styled';

export const LogoSiderBar = () => {
  return (
    <NavLinkCalendar to="/calendar">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '32px',
        }}
      >
        <img width="71px" height="68px" alt="goose-track-img" src={goose}></img>
        <TextLogo>
          G<TextLogoSpan>oo</TextLogoSpan>seTrack
        </TextLogo>
      </div>
    </NavLinkCalendar>
  );
};
