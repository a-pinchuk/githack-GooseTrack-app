// import LogoutBtn from 'components/TestBtnLogout/LogoutBtn';
import styled from 'styled-components';

export const SideBox = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 100%;

  background: #fff;
  border-right: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 32px 24px 24px 24px;
`;

export const ButtonCloseBar = styled.button`
  background-color: green;
  display: block;

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: none;
  }
`;
