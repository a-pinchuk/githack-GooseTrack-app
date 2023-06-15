import styled from 'styled-components';
import { ReactComponent as Avatar } from '../../images/avatar.svg';
import { ReactComponent as Cross } from '../../images/cross.svg';

import { DatePicker } from '@mui/x-date-pickers';

export const StyledDataPicker = styled(DatePicker)`
  input {
    padding-left: 0px;
    color: ${p => p.theme.colors.primary_text_mode};
  }
  input::placeholder {
    font-family: ${p => p.theme.fonts.text};
    font-size: ${p => p.theme.fontSizes.s};
    color: ${p => p.theme.colors.user_placeholder};
    font-weight: 600;
    opacity: 1;
  }

  /* Input value */
  .MuiInputBase-root {
    position: relative;
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 600;
  }
  .MuiButtonBase-root {
    color: ${p => p.theme.colors.button_calendar};
  }
  .MuiOutlinedInput-notchedOutline {
    border: 1px solid #11111126;
  }

  .MuiOutlinedInput-root {
    min-width: 250px;
    height: 44px;
    padding-left: 14px;
    padding-right: 14px;
    outline: none;
    border: none;
    border-radius: ${p => p.theme.radii.small};

    .MuiOutlinedInput-notchedOutline {
      border: ${p => p.theme.colors.user_input_border};
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border: 1px solid #111111;
    }
  }
`;

export const Container = styled.div`
  max-width: 375px;
  padding-bottom: 40px;

  background-color: ${p => p.theme.colors.background_mode};

  @media (min-width: 768px) {
    max-width: 100%;
    min-width: 768px;
    padding-bottom: 38px;
  }
  @media (min-width: 1440px) {
    max-width: 100%;
    padding-bottom: 32px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 59px;
  padding-bottom: 40px;
  padding-left: 18px;
  padding-right: 18px;
  background-color: ${p => p.theme.colors.second_backgrond_mode};
  border-radius: ${p => p.theme.radii.big};

  @media (min-width: 768px) {
    align-items: center;
    padding-top: 40px;
  }
  @media (min-width: 1440px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .InvalidInput {
    border: 1px solid ${p => p.theme.colors.redError};
  }
  .ErrorMsg {
    color: green;
  }
`;

export const StyledAvatar = styled.div`
  width: 72px;
  height: 72px;
  position: absolute;
  left: calc(50% - 36px);
  top: -36px;
  fill: rgba(62, 133, 243, 0.18);
  background-color: white;
  border: 2px solid #3e85f3;
  border-radius: ${p => p.theme.radii.round};
  @media (min-width: 768px) {
    position: static;
    width: 124px;
    height: 124px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${p => p.theme.radii.round};
  }
`;

export const AvatarDefault = styled(Avatar)`
  position: absolute;
  left: calc(50% - 25px);
  top: 5px;
  width: 50px;
  height: 50px;
  @media (min-width: 768px) {
    left: calc(50% - 47px);
    top: 45px;
    width: 95px;
    height: 95px;
  }
  @media (min-width: 1440px) {
    left: calc(50% - 47px);
    top: 65px;
    width: 95px;
    height: 95px;
  }
`;

export const Plus = styled(Cross)`
  position: absolute;
  left: 53%;
  top: 28px;
  width: 14px;
  height: 14px;
  font-size: 12px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 147px;
    left: 52%;
  }
  @media (min-width: 1440px) {
    top: 170px;
    left: 51%;
  }
`;

export const Heading = styled.div`
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.primary_text_mode};
  text-align: center;
`;

export const Title = styled.div`
  margin-top: 4px;
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.user_label_color};
  text-align: center;
`;

// Обгортка Inputs without avatar
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media (min-width: 1440px) {
    width: 758px;
    flex-direction: initial;
    flex-wrap: wrap;
    column-gap: 50px;
    row-gap: 24px;
  }
`;

// Обгортка Label та Input
export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 354px;
  }
  @media (min-width: 1440px) {
    width: 354px;
  }
`;

export const Label = styled.label`
  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: 400;
  margin-bottom: 8px;
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.user_label_color};
`;

export const Input = styled.input`
  min-width: 250px;
  height: 42px;
  padding-left: 14px;
  padding-right: 14px;
  outline: none;

  border: ${p => p.theme.colors.user_input_border};
  border-radius: ${p => p.theme.radii.small};

  ${props =>
    props.value &&
    `
    font-family: 'Inter';
    font-size: 14px;
    font-weight:600;
    color: black;
  
  `}
  color: ${p => p.theme.colors.primary_text_mode};
  background-color: transparent;
  &::placeholder {
    font-family: ${p => p.theme.fonts.text};
    font-size: ${p => p.theme.fontSizes.s};
    color: ${p => p.theme.colors.user_placeholder};
  }
  &:hover,
  &:focus {
    border: 1px solid #111111;
  }
  @media (min-width: 768px) {
    height: 46px;
  }
`;

export const ErrorMessage = styled.div`
  color: ${p => p.theme.colors.redError};
  font-size: 12px;
  margin-top: 3px;
  margin-left: 8px;
  @media (min-width: 768px) {
    margin-top: 4px;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 50px;
  padding-right: 50px;
  width: 195px;
  height: 46px;
  font-family: ${p => p.theme.fonts.text};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes.s};
  text-align: center;
  color: ${p => p.theme.colors.white};
  background-color: ${p =>
    p.disabled ? p.theme.colors.background_mode : p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.big};

  border: ${p => p.theme.borders.none};
  cursor: ${p => (p.disabled ? 'default' : 'pointer')};
  &:hover(:not disabled),
  &:focus(:not disabled) {
    background-color: ${p => p.theme.colors.secondary};
  }

  @media (min-width: 768px) {
    width: 262px;
    height: 48px;
  }
  @media (min-width: 1440px) {
    margin-top: 88px;
  }
`;
