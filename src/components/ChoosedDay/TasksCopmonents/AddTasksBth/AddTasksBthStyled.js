import styled from 'styled-components';
import { theme } from 'theme';

export const ButtonTask = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  font-family: ${theme.fonts.text};
  font-weight: ${theme.fontWeights.medium};
  background: ${theme.colors.background_button};
  color: ${theme.colors.primary_text_mode};
  font-size: ${theme.fontSizes.s};
  height: 47px;
  line-height: ${theme.lineHeights.body};
  border: none;
  border: 1px dashed ${theme.colors.primary};
  //------------------

  //------------------
  border-radius: ${theme.radii.small};
  transition: background 250ms linear;
  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  span {
    display: block;
    align-self: center;
    margin-right: 8px;
    margin-bottom: 3px;
    font-size: 30px;
    font-weight: 400;
  }
`;
export const ButtonBox = styled.div`
  padding: 14px 18px 28px 18px;
`;
