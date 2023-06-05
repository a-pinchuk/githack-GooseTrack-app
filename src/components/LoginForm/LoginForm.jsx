import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { login } from 'redux/auth/operations';
import {
  StyledForm,
  StyledTitle,
  StyledButton,
  Label,
  StyledField,
  StyledErrorMessage,
  PasswordInputWrapper,
  StyledVisibilityBtn,
  Svg,
} from './LoginForm.styled';

import sprite from 'icons/sprite.svg';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('This is an ERROR email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .matches(/^\S*$/, 'Password must not contain spaces'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await dispatch(login(values));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values, errors, touched }) => (
        <StyledForm>
          <StyledTitle>Log In</StyledTitle>
          <Label>
            Email
            <StyledField
              className={
                errors.email && touched.email ? 'InvalidInput' : 'ValidInput'
              }
              type="email"
              name="email"
              placeholder="Enter email"
              title="Email must be in the format username@domain.com"
              value={values.email}
            />
            <StyledErrorMessage name="email" component="div" />
          </Label>
          <Label>
            Password
            <PasswordInputWrapper>
              <StyledField
                className={
                  errors.password && touched.password
                    ? 'InvalidInput'
                    : 'ValidInput'
                }
                type={passwordType}
                name="password"
                placeholder="Enter password"
                title="Password must contain at least one number, one lowercase and one uppercase letter, and be at least 6 characters long."
                value={values.password}
              />

              <StyledVisibilityBtn type="button" onClick={togglePassword}>
                {passwordType === 'password' ? (
                  <svg height="20" width="20" fill="#111111">
                    <use href={sprite + '#icon-hide'}></use>
                  </svg>
                ) : (
                  <svg height="20" width="20" fill="#111111">
                    <use href={sprite + '#icon-show'}></use>
                  </svg>
                )}
              </StyledVisibilityBtn>
            </PasswordInputWrapper>
            <StyledErrorMessage name="password" component="div" />
          </Label>
          <StyledButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting' : 'Log in'}
            <Svg>
              <use href={sprite + '#icon-enter'}></use>
            </Svg>
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};
