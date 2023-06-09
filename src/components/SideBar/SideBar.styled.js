import styled from 'styled-components';

export const SideBox = styled.div`
  box-sizing: border-box;

  width: 100%;
  /* height: 100%; */

  background: #fff;
  border-right: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 24px 20px;
  /* max-height: 812px; */

  @media screen and (min-width: 768px) {
    min-width: 289px;
    padding: 24px 32px;
    /* max-height: 1024px; */
  }

  @media screen and (min-width: 1440px) {
    padding: 32px 24px 24px 24px;
    max-width: 289px;
    /* max-height: 900px; */
  }
`;

export const ButtonCloseBar = styled.button`
  background-color: green;
  display: block;

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: none;
  }
`;
