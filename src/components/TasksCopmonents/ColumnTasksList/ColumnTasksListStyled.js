import styled from "styled-components";
import {ReactComponent as Arrow} from '../../../images/TasksSvg/arrow-right.svg';
import {ReactComponent as Pencil} from '../../../images/TasksSvg/pencil-01.svg';
import {ReactComponent as Trash} from '../../../images/TasksSvg/trash-04.svg';

import { theme } from "theme";
export const TaskListBox = styled.ul`
overflow-y: scroll;
max-height: 400px;
padding-right: 10px;
padding-left: 18px;
list-style: none;
position: relative;
/* overflow: visible; */
z-index: 0;

`;

export const TaskListItem = styled.li`
border-radius: 8px;
padding: 14px;
border: 1px solid #DCE3E580;
padding: 20px;
margin-bottom: 20px;
background-color: ${theme.colors.muted};

`;

export const BoxIconBth = styled.div`
position: relative;
z-index: 100;
`;

export const IconBthArrow = styled(Arrow)`
cursor: pointer;
width: 16px;
height: 16px;
stroke: ${({active}) => active ? `${theme.colors.secondary}` : `${theme.colors.black}`};
transition: stroke 250ms linear;
margin-right: 10px;

&:hover{
	stroke: ${theme.colors.secondary};
}
`;

export const  IconBthPencil = styled(Pencil)`
cursor: pointer;
width: 16px;
height: 16px;
stroke: ${theme.colors.black};
transition: stroke 250ms linear;
margin-right: 10px;
&:hover{
	stroke: ${theme.colors.secondary};
}
`;

export const IconBthTrash = styled(Trash)`
cursor: pointer;
width: 16px;
height: 16px;
stroke: ${theme.colors.black};
transition: stroke 250ms linear;
&:hover{
	stroke: ${theme.colors.secondary};
}`;

export const AvatorTaskList = styled.img`
border: 1.8px solid ${theme.colors.primary};
margin-right: 8px;
border-radius: 50%;
overflow: hidden;
display: block;
`;

export const TaskStatue = styled.p`
margin: 0;
font-size: 10px;
font-family: ${theme.fonts.heading};
height: 20px;
display: inline-flex;
justify-content: center;
align-items: center;
border-radius: 4px;
color: ${theme.colors.muted};
background-color: #72C2F8;
padding: 0 12px 0 12px;
font-weight: ${theme.fontWeights.medium};
line-height: 0.83;
align-self: flex-end;
`;

export const TaskText = styled.p`
color: ${theme.colors.black};
font-family: ${theme.fonts.heading};
font-weight: ${theme.fontWeights.normal};
line-height: 1.28;
margin-bottom: 32px;
max-width: 200px;
@media screen and (min-width: 375px) {
	max-width: 256px;
}
overflow: hidden;
text-overflow: ellipsis;

`;

export const Tooltip = styled.div`
position: absolute;
top: 100%;
right: -15px;
background: ${theme.colors.background};
border-radius: 8px;
padding: 20px 24px 20px 24px;
box-shadow: ${theme.shadows.boxShadow};
width: 100px;
z-index: 100;

`;
export const TooltipButton = styled.button`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
border: none;
background-color: transparent;
white-space: nowrap;
padding: 0;
cursor: pointer;
&:hover {
	fill: currentColor;

}


`;
export const TooltipButtonItem = styled.li`
&:not(:last-child){
	margin-bottom: 14px;
}

`