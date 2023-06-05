import styled from 'styled-components';
import { ReactComponent as Avatar } from '../../images/avatar.svg';
import { ReactComponent as Cross } from '../../images/cross.svg';

export const Container = styled.div`
  width: 375px;
  height: 724px;
  border: 1px solid red;
  background-color: white;
  @media (min-width: 768px) {
    min-width: 768px;
  }
  @media (min-width: 1440px) {
    min-width: 1440px;
  }
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 653px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 40px;
  margin-top: 31px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.big};

  @media (min-width: 768px) {
    min-width: 768px;
  }
  @media (min-width: 1440px) {
    min-width: 1440px;
  }
`;

export const StyledAvatar = styled(Avatar)`
  width: 72px;
  height: 72px;
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

export const Heading = styled.div`
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.balack};
  text-align: center;
  @media (min-width: 768px) {
    min-width: 768px;
  }
  @media (min-width: 1440px) {
    min-width: 1440px;
  }
`;

export const Title = styled.div`
  margin-top: 4px;
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.text};
  text-align: center;
  @media (min-width: 768px) {
    min-width: 768px;
  }
  @media (min-width: 1440px) {
    min-width: 1440px;
  }
`;

// Обгортка Input без fvatar
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 392px;
  margin-left: 18px;
  margin-right: 18px;
  margin-top: 40px;
  margin-bottom: 40px;
  gap: 18px;
`;

// Обгортка Label та Input
export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: 400;
  margin-bottom: 8px;
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.black};
`;

export const Input = styled.input`
  min-width: 250px;
  padding: 12px 14px;
  outline: none;
  border: 1px solid #11111126;
  border-radius: ${p => p.theme.radii.small};
  ${props =>
    props.value &&
    `
    font-family: 'Inter';
    font-size: 14px;
    font-weight:600;
    color: black;
  
  `}
  &::placeholder {
    font-family: ${p => p.theme.fonts.text};
    font-size: ${p => p.theme.fontSizes.s};
    color: #34343480;
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
  margin-bottom: 40px;
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
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.big};
  border: ${p => p.theme.borders.none};
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.secondary};
  }
  @media (min-width: 768px) {
    width: 262px;
    height: 48px;
  }
`;
