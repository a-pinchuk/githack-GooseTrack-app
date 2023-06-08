import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  padding: 40px 24px;

  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.small};

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`;

export const Title = styled.p`
  margin-top: 0;
  margin-bottom: 32px;

  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 18px;
  line-height: 1.33;

  color: ${p => p.theme.colors.primary};
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 1;
  }
`;

export const Label = styled.label`
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.body};

  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.21;
  }

  &:not(:last-child) {
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
      margin-bottom: 18px;
    }
  }

  &:nth-of-type(2) {
    margin-bottom: 32px;

    @media screen and (min-width: 768px) {
      margin-bottom: 48px;
    }
  }

  &.is-valid {
    color: ${p => p.theme.colors.greenValid};
  }

  &.is-invalid {
    color: ${p => p.theme.colors.redError};
  }

  & p {
    margin: 0;
    padding: 0;
    margin-top: 8px;
    margin-left: 18px;
    color: ${p => p.theme.colors.greenValid};
  }

  & .error-success {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Field = styled(FormikField)`
  box-sizing: border-box;
  width: 100%;
  padding: 14px;

  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.29px;

  color: ${p => p.theme.colors.black};
  outline: none;
  border: ${p => p.theme.borders.normal} rgba(17, 17, 17, 0.15);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 18px;
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.12;
  }

  &::placeholder {
    font-family: ${p => p.theme.fonts.text};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.29;
    color: rgba(17, 17, 17, 0.15);

    @media screen and (min-width: 768px) {
      font-size: ${p => p.theme.fontSizes.m};
      line-height: 1.12;
    }
  }

  &:hover,
  &:focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  }

  &.is-valid {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.greenValid};
  }

  &.is-invalid {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.redError};
  }
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
  margin-top: 8px;
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 8px;
`;

export const VisibilityBtn = styled.button`
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);

  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  & svg.is-valid {
    stroke: ${p => p.theme.colors.greenValid};
    fill: ${p => p.theme.colors.greenValid};
  }

  & svg.is-invalid {
    stroke: ${p => p.theme.colors.redError};
    fill: ${p => p.theme.colors.redError};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  padding-top: 14px;
  padding-bottom: 14px;

  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.28px;
  letter-spacing: -0.02em;

  border: none;
  border-radius: ${p => p.theme.radii.big};
  box-shadow: ${p => p.theme.shadows.boxShadow};

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export const Svg = styled.svg`
  stroke: ${p => p.theme.colors.white};
  height: 18px;
  width: 18px;

  @media screen and (min-width: 768px) {
    height: 20px;
    width: 20px;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  margin-left: 18px;
  margin-top: 8px;
  color: ${p => p.theme.colors.redError};
`;
