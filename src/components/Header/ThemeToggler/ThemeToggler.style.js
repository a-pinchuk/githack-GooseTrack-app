import styled from "styled-components";

export const ThemeModeBtn = styled.button`
   fill: #3E85F3;
    background-color: transparent;
    border: none;
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 1px;

    margin-left: 8px;

    @media screen and (min-width: 767px) {
       margin-left: 14px;
    }
`;