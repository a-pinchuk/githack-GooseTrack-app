import { theme } from 'theme';
import styled from 'styled-components';

export const TaskListItem = styled.li`
  border-radius: 8px;
  padding: 14px;
  border: 1px solid #dce3e580;
  padding: 14px;
  margin-bottom: 18px;
  background-color: ${theme.colors.muted};
`;

export const AvatorTaskList = styled.img`
  border: 1.8px solid ${theme.colors.primary};
  margin-right: 8px;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  overflow: hidden;
  display: block;
  height: auto;
  align-self: safe;
  justify-content: flex-start;
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
  background-color: ${({ priority }) => {
    if (priority === 'low') {
      return '#72C2F8';
    }
    if (priority === 'medium') {
      return theme.colors.mainYellow;
    }
    if (priority === 'high') {
      return theme.colors.mainRed;
    }
  }};
  padding: 0 12px 0 12px;
  font-weight: ${theme.fontWeights.medium};
  line-height: 0.83;
  align-self: flex-end;
  margin-right: auto;
`;

export const TaskText = styled.p`
  color: ${theme.colors.black};
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.normal};
  line-height: 1.28;
  margin-bottom: 32px;
  margin-top: 0;
  font-size: ${theme.fontSizes.s};
  max-width: 200px;
  @media screen and (min-width: 375px) {
    max-width: 256px;
  }
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// export const Tooltip = styled.div`
// position: absolute;
// top: 100%;
// right: -15px;
// background: ${theme.colors.background};
// border-radius: 8px;
// padding: 20px 24px 20px 24px;
// box-shadow: ${theme.shadows.boxShadow};
// width: 100px;
// z-index: 100;

// `;
// export const TooltipButton = styled.button`
// width: 100%;
// display: flex;
// align-items: center;
// justify-content: space-between;
// border: none;
// background-color: transparent;
// white-space: nowrap;
// padding: 0;
// cursor: pointer;
// &:hover {
// 	fill: currentColor;

// }

// `;
// export const TooltipButtonItem = styled.li`
// &:not(:last-child){
// 	margin-bottom: 14px;
// }
// `
