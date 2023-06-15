import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { resetPassword } from 'redux/auth/operations';
import {
  Form,
  Title,
  Label,
  Field,
  ErrorMessage,
  PasswordInputWrapper,
  VisibilityBtn,
  Button,
} from './PasswordRecoveryForm.styled';

import sprite from 'icons/sprite.svg';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .matches(/^\S*$/, 'Password must not contain spaces'),
  passwordConfirm: Yup.string()
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const PasswordRecoveryForm = ({ token }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

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
      initialValues={{ password: '', passwordConfirm: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        const res = await dispatch(
          resetPassword({ token, newPassword: values.password })
        );
        if (res.type === '/users/reset-password/fulfilled') {
          navigate('/login', { replace: true });
        }
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
            <Title>{t('changePassword.title')}</Title>

            <Label className={isValid('password')}>
              {t('changePassword.password.password')}
              <PasswordInputWrapper>
                <Field
                  className={isValid('password')}
                  type={passwordType}
                  name="password"
                  placeholder={t('changePassword.password.placeholder')}
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
              {t('changePassword.password.confirm')}
              <PasswordInputWrapper>
                <Field
                  className={isValid('passwordConfirm')}
                  type={confirmPasswordType}
                  name="passwordConfirm"
                  placeholder={t('changePassword.password.confirmPlaceholder')}
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
              {isSubmitting ? 'Submitting' : t('changePassword.sendBtn')}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
