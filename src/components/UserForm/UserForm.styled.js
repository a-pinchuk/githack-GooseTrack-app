import styled from 'styled-components';
import { ReactComponent as Avatar } from '../../images/avatar.svg';
import { ReactComponent as Cross } from '../../images/cross.svg';
import { Box } from '@mui/material';

export const Container = styled.div`
  width: 704px;
  height: 854px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 40px;
  
  background-color: ${p => p.theme.colors.white};
   @media (min-width: 768px) {
    margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 38px;
  }
  @media (min-width: 1440px) {
    min-width: 1440px;
`;
export const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  min-width: 299 px;
  background-color: ${p => p.theme.colors.white};

  @media (min-width: 768px) {
    min-width: 354px;
  }
  @media (min-width: 1440px) {
    min-width: 1440px;
  }
`;
export const StyledAvatar = styled(Avatar)`
  width: 124px;
  height: 124px;
  fill: rgba(62, 133, 243, 0.18);
  border: 2px solid #3e85f3;
  border-radius: ${p => p.theme.radii.round};
`;

export const Plus = styled(Cross)`
  font-size: 15px;
  &:hover,
  &:focus {
    fill: red;
  }
`;

export const AvatarInput = styled.input`
  font-size: 24px;
`;

export const Label = styled.label`
  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: 400;
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.black};
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const StyledInput = styled.input`
  border-radius: ${p => p.theme.fontSizes.s};
  border: 1px solid #11111126;
  height: 42px;
  outline: none;
  padding: 14px 18px;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  &:hover,
  &:focus {
    border: 1px solid #11111126;
  }
  @media (min-width: 768px) {
    height: 46px;
  }

  @media (min-width: 1440px) {
    min-width: 1440px;
  }
`;

export const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  width: 262px;
  height: 48px;
  font-family: ${p => p.theme.fonts.text};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes.s};
  text-align: center;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.big};
  border: ${p => p.theme.borders.none};
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.secondary};
  }
`;
