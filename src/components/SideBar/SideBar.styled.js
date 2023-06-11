import styled from 'styled-components';

export const SideBox = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: inherit;

  background-color: ${props => props.theme.colors.third_background_mode};

  border-radius: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 24px 20px;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    min-width: 289px;
    padding: 24px 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 32px 24px 24px 24px;
    max-width: 289px;
  }
`;

export const ButtonCloseBar = styled.button`
  background-color: green;
  display: block;

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: none;
  }
`;
