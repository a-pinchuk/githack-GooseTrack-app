import { theme } from 'theme';
import styled from 'styled-components';

import { ReactComponent as Arrow } from '../../../../images/tasksSvg/arrow-right.svg';
import { ReactComponent as Pencil } from '../../../../images/tasksSvg/pencil-01.svg';
import { ReactComponent as Trash } from '../../../../images/tasksSvg/trash-04.svg';

export const BoxIconBth = styled.div`
  position: relative;
  z-index: 100;
`;

export const IconBthArrow = styled(Arrow)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: ${({ $isactive }) =>
    $isactive ? `${theme.colors.secondary}` : `${theme.colors.black}`};
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
  stroke: ${theme.colors.black};
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
  stroke: ${theme.colors.black};
  transition: stroke 250ms linear;
  &:hover {
    stroke: ${theme.colors.secondary};
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  top: 100%;
  right: -15px;
  background: ${theme.colors.background};
  border-radius: 8px;
  padding: 20px 24px 20px 24px;
  box-shadow: ${theme.shadows.boxShadow};
  z-index: 100;
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
  cursor: pointer;
  &:hover {
    fill: currentColor;
  }
`;
export const TooltipButtonItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;
