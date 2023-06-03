import styled from 'styled-components';
import { theme } from 'theme';

export const TaskContainer = styled.ul`

display: flex;
width: 100%;
height: calc(100vh - 80px);
list-style: none;
padding: 0;
margin: 0;
justify-content: start;
overflow-x: scroll;
@media screen and (min-width:1440px) {
	justify-content: center;
}
/* overflow: hidden; */

`;
export const TaskItem = styled.li`
flex: 0 0 100%;
padding-right: 10px;
border-radius: ${theme.radii.small};
border: 1px solid #DCE3E580;
box-sizing: border-box;
&:not(:last-child){
	margin-right: 20px;
}

max-height: 565px;
@media screen and (min-width:768px) {
	flex: 0 0 46%;
	&:not(:last-child){
	margin-right: 16px;
}
}

@media screen and (min-width:1440px) {
	flex: 0 0 344px;
	&:not(:last-child){
	margin-right: 27px;
}
}
/* overflow: hidden; */

`;

