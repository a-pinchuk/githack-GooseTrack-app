import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { logIn } from 'redux/auth/operations';
import {
  Form,
  Title,
  Label,
  Field,
  ErrorMessage,
  InputWrapper,
  PasswordInputWrapper,
  VisibilityBtn,
  Button,
} from './PasswordRecoveryForm.styled';

import sprite from 'icons/sprite.svg';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('This is an ERROR email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .matches(/^\S*$/, 'Password must not contain spaces'),
  passwordConfirm: Yup.string()
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const PasswordRecoveryForm = () => {
  const dispatch = useDispatch();

  const [passwordType, setPasswordType] = useState('password');
  const [confirmPasswordType, setConfirmPasswordType] = useState('password');

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  const toggleConfirmPassword = () => {
    if (confirmPasswordType === 'password') {
      setConfirmPasswordType('text');
      return;
    }
    setConfirmPasswordType('password');
  };

  return (
    <Formik
      initialValues={{ email: '', password: '', passwordConfirm: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await dispatch(logIn(values));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values, errors, touched }) => {
        const isValid = field =>
          touched[field] && errors[field]
            ? 'is-invalid'
            : touched[field]
            ? 'is-valid'
            : '';

        return (
          <Form>
            <Title>Password recovery</Title>

            <Label className={isValid('email')}>
              Email
              <InputWrapper>
                <Field
                  className={isValid('email')}
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  title="Email must be in the format username@domain.com"
                  value={values.email}
                />

                {isValid('email') === 'is-valid' && (
                  <svg height="20" width="20" className="error-success">
                    <use href={sprite + '#icon-input-success'}></use>
                  </svg>
                )}
                {isValid('email') === 'is-invalid' && (
                  <svg height="20" width="20" className="error-success">
                    <use href={sprite + '#icon-input-error'}></use>
                  </svg>
                )}
              </InputWrapper>
              {isValid('email') === 'is-valid' && (
                <p>This is a CORRECT email</p>
              )}
              <ErrorMessage name="email" component="div" />
            </Label>

            <Label className={isValid('password')}>
              New Password
              <PasswordInputWrapper>
                <Field
                  className={isValid('password')}
                  type={passwordType}
                  name="password"
                  placeholder="Enter password"
                  title="Password must contain at least one number, one lowercase and one uppercase letter, and be at least 6 characters long."
                  value={values.password}
                />

                <VisibilityBtn type="button" onClick={togglePassword}>
                  {passwordType === 'password' ? (
                    <svg
                      height="20"
                      width="20"
                      stroke="#111111"
                      className={isValid('password')}
                    >
                      <use href={sprite + '#icon-hide'}></use>
                    </svg>
                  ) : (
                    <svg
                      height="20"
                      width="20"
                      stroke="#111111"
                      className={isValid('password')}
                    >
                      <use href={sprite + '#icon-show'}></use>
                    </svg>
                  )}
                </VisibilityBtn>
              </PasswordInputWrapper>
              {isValid('password') === 'is-valid' && (
                <p>This is a CORRECT password</p>
              )}
              <ErrorMessage name="password" component="div" />
            </Label>

            <Label className={isValid('passwordConfirm')}>
              Confirm Password
              <PasswordInputWrapper>
                <Field
                  className={isValid('passwordConfirm')}
                  type={confirmPasswordType}
                  name="passwordConfirm"
                  placeholder="Confirm password"
                  title="Please confirm your password"
                  value={values.passwordConfirm}
                />

                <VisibilityBtn type="button" onClick={toggleConfirmPassword}>
                  {confirmPasswordType === 'password' ? (
                    <svg
                      height="20"
                      width="20"
                      stroke="#111111"
                      className={isValid('passwordConfirm')}
                    >
                      <use href={sprite + '#icon-hide'}></use>
                    </svg>
                  ) : (
                    <svg
                      height="20"
                      width="20"
                      stroke="#111111"
                      className={isValid('passwordConfirm')}
                    >
                      <use href={sprite + '#icon-show'}></use>
                    </svg>
                  )}
                </VisibilityBtn>
              </PasswordInputWrapper>
              {isValid('passwordConfirm') === 'is-valid' && (
                <p>This is a CORRECT password confirmation</p>
              )}
              <ErrorMessage name="passwordConfirm" component="div" />
            </Label>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting' : 'Reset Password'}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
