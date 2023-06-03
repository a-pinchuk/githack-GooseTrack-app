import styled from "styled-components";
import { theme } from "theme";

export const ButtonTask = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
padding: 12px;
font-weight: ${theme.fontWeights.medium};
background: ${theme.colors.lightBlue};
color: ${theme.colors.black};
font-size: ${theme.fontSizes.s};
height: 47px;
line-height: ${theme.lineHeights.body};
border: 1px dashed ${theme.colors.primary};
border-radius: ${theme.radii.small};


span{
	display: block;
	align-self: center;
	margin-right: 8px;
	margin-bottom: 3px;
	font-size: 25px;
	font-weight: ${theme.fontWeights.normal};
}
`;
export const ButtonBox = styled.div`
padding: 18px 18px 24px 18px;

`

