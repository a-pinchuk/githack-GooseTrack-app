import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { updateAccessToken } from 'redux/auth/authSlice';
import { PasswordForm } from 'components/PasswordRecoveryForm/PasswordForm';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';

import { Container, FormWrapper } from './PasswordPage.styled';

const PasswordPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = window.location?.search.split('=')[1];

    dispatch(updateAccessToken(accessToken));
  }, [dispatch]);
  const { t } = useTranslation();

  return (
    <Container>
      <FormWrapper>
        <PasswordForm />
      </FormWrapper>

      <AuthNavigate link="/login" text={t('changePassword.return')} />
    </Container>
  );
};

export default PasswordPage;
