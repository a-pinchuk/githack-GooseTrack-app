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
      {({ isSubmitting, values, errors, touched, dirty }) => {
        const isValid =
          touched.email && errors.email
            ? 'is-invalid'
            : touched.email
            ? 'is-valid'
            : '';
        console.log(isValid);
        console.log(errors);
        console.log(touched);
        console.log(dirty);
        console.log(dirty.email);
        return (
          <Form>
            <Title>Log In</Title>
            <Label>
              <span className={isValid}>Email</span>
              <Field
                className={
                  errors.email && touched.email && dirty.email
                    ? 'InvalidInput'
                    : 'ValidInput'
                }
                type="email"
                name="email"
                placeholder="Enter email"
                title="Email must be in the format username@domain.com"
                value={values.email}
              />
              <ErrorMessage name="email" component="div" />
            </Label>
            <Label>
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
                    <svg height="20" width="20" fill="#111111">
                      <use href={sprite + '#icon-hide'}></use>
                    </svg>
                  ) : (
                    <svg height="20" width="20" fill="#111111">
                      <use href={sprite + '#icon-show'}></use>
                    </svg>
                  )}
                </VisibilityBtn>
              </PasswordInputWrapper>
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
