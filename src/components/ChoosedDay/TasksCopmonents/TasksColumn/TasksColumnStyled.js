import styled from 'styled-components';
import { theme } from 'theme';

export const TaskItem = styled.li`
  flex: 0 0 100%;
  padding-right: 10px;
  border-radius: ${theme.radii.small};
  border: ${p => p.theme.colors._out_border};
  box-sizing: border-box;
  background-color: ${theme.colors.task_item_bg};
  //add
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-right: 20px;
  }

  max-height: 568px;
  @media screen and (min-width: 768px) {
    flex: 0 0 47%;
    &:not(:last-child) {
      margin-right: 16px;
    }
    //add
    /* display: flex;
    flex-direction: column; */
  }

  @media screen and (min-width: 1440px) {
    flex: 0 0 344px;
    &:not(:last-child) {
      margin-right: 27px;
    }
  }
  /* overflow: hidden; */
`;
