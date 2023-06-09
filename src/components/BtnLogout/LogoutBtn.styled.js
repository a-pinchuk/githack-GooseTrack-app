import styled from 'styled-components';
import { ReactComponent as LogOutIcon } from '../../images/sideBar/log-out.svg';

export const LogOutBtnStyled = styled.button`
  width: 141px;
  height: 56px;

  background: #3e85f3;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;
  border: none;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(24 / 18);

  letter-spacing: -0.02em;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  :hover {
    background: #2b78ef;
  }

  @media screen and (min-width: 375px) {
    width: 131px;
    height: 46px;

    font-size: 14px;
    line-height: calc(18 / 14);
    padding: 14px 0px;
  }

  @media screen and (min-width: 768px) {
    width: 141px;
    height: 56px;
    font-size: 18px;
    line-height: 24px;
    padding: 16px 0px;
  }
`;

export const LogOutIconStyled = styled(LogOutIcon)`
  margin-left: 10px;
  @media screen and (min-width: 375px) {
    margin-left: 8.25px;
    width: 13.5px;
    height: 13.5px;
  }

  @media screen and (min-width: 768px) {
    margin-left: 13.5px;
    width: 20px;
    height: 20px;
  }
`;
