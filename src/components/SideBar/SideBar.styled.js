// import LogoutBtn from 'components/TestBtnLogout/LogoutBtn';
import styled from 'styled-components';

export const SideBox = styled.div`
  box-sizing: border-box;
  max-width: 295px;
  width: 100%;
  height: 100%;

  background: #fff;
  border-right: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 24px 20px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    padding: 24px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 32px 24px 24px 24px;
  }
`;
