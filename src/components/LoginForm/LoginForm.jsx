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
            <Title>Log In</Title>
            <Label className={isValid('email')}>
              Email
              <InputWrapper>
                <Field
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
              Password
              <PasswordInputWrapper>
                <Field
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
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting' : 'Log in'}
              <Svg>
                <use href={sprite + '#icon-enter'}></use>
              </Svg>
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
