import { theme } from 'theme';
import styled from 'styled-components';

import { ReactComponent as Arrow } from '../../../../images/tasksSvg/arrow-right.svg';
import { ReactComponent as Pencil } from '../../../../images/tasksSvg/pencil-01.svg';
import { ReactComponent as Trash } from '../../../../images/tasksSvg/trash-04.svg';

export const BoxIconBth = styled.div`
  /* position: relative; */
  z-index: 100;
  height: 15px;

  &::after {
    content: '';
    display: block;
    /* position: absolute;
    top: 0;
    left: 0; */
    background: transparent;
    width: 100%;
    height: 10px;
  }
`;

export const IconBthArrow = styled(Arrow)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: ${({ $isactive }) =>
    $isactive
      ? `${theme.colors.secondary}`
      : `${theme.colors.primary_text_mode}`};
  transition: stroke 250ms linear;
  margin-right: 10px;

  &:hover {
    stroke: ${theme.colors.secondary};
  }
`;

export const IconBthPencil = styled(Pencil)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: ${theme.colors.primary_text_mode};
  transition: stroke 250ms linear;
  margin-right: 10px;
  &:hover {
    stroke: ${theme.colors.secondary};
  }
`;

export const IconBthTrash = styled(Trash)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: ${theme.colors.primary_text_mode};
  transition: stroke 250ms linear;
  &:hover {
    stroke: ${theme.colors.secondary};
  }
`;

export const Tooltip = styled.div`
  right: -15px;
  background: ${theme.colors.modal_window};
  border-radius: 8px;
  border: ${theme.colors.user_input_border};
  padding: 20px 24px 20px 24px;
  box-shadow: ${theme.shadows.boxShadow};
  height: 90.78px;
  z-index: 100;
  width: 115px;
  @media screen and (min-width: 375px) {
    width: 157px;
  }
`;
export const TooltipButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  font-family: ${theme.fonts.text};
  justify-content: space-between;
  border: none;
  background-color: transparent;
  white-space: nowrap;
  padding: 0;
  transition: color 250ms linear;
  cursor: pointer;
  color: ${theme.colors.third_text_mode};

  &:hover {
    color: ${theme.colors.secondary};
    svg {
      stroke: ${theme.colors.secondary};
    }
  }
  @media screen and (max-width: 375px) {
    font-size: ${theme.fontSizes.s};
  }
`;

export const TooltipButtonItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 14px;
  }
  color: ${theme.colors.second_text_mode};
`;
