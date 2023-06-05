import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { register } from 'redux/auth/operations';
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
} from './RegisterForm.styled';

import sprite from 'icons/sprite.svg';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(/^\S[\S\s]{0,28}\S$/, 'Name must be between 2 and 30 characters')
    .test(
      'name-validation',
      'Name must be at least 2 characters long',
      value => {
        return value && value.replace(/\s/g, '').length >= 2;
      }
    ),
  email: Yup.string()
    .email('This is an ERROR email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .matches(/^\S*$/, 'Password must not contain spaces'),
});

export const RegisterForm = () => {
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
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await dispatch(register(values));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values, errors, touched }) => (
        <StyledForm>
          <StyledTitle>Sign Up</StyledTitle>
          <Label>
            Name
            <StyledField
              className={
                errors.name && touched.name ? 'InvalidInput' : 'ValidInput'
              }
              type="text"
              name="name"
              placeholder="Enter your name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={values.name}
            />
            <StyledErrorMessage name="name" component="div" />
          </Label>
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
            {isSubmitting ? 'Submitting' : 'Sign Up'}
            <Svg>
              <use href={sprite + '#icon-enter'}></use>
            </Svg>
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};
