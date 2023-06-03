import styled from "styled-components";
import { theme } from "theme";
export const TaskHeaderBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 18px 18px 24px 18px;
`;

export const TaskHeaderBth = styled.button`
width: 22px;
height: 22px;
border-radius: ${theme.radii.round};
border: 2px solid ${theme.colors.black};
display: flex;
align-items: center;
justify-content: center;
font-weight: ${theme.fontWeights.medium};
font-size: 19px;
cursor: pointer;
`;

export const TaskHeaderTitle = styled.h2`
margin: 0;
font-size: 20px;
font-family: ${theme.fonts.text};
color: ${theme.colors.black};
font-weight: ${theme.fontWeights.bold};
line-height: ${theme.lineHeights.heading};
`;