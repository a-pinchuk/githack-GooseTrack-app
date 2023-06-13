import styled from "styled-components";

export const ThemeModeBtn = styled.button`
  color: ${props => props.theme.colors.primary};
  background-color: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1px;
  margin-left: 8px;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    margin-left: 14px;
  }
`;
