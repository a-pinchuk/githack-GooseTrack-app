import React from 'react';
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
  Button,
} from './PasswordForm.styled';

import sprite from 'icons/sprite.svg';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('This is an ERROR email')
    .required('Email is required'),
});

export const PasswordForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '' }}
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

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting' : 'Send'}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
