import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { updateAccessToken } from 'redux/auth/authSlice';
import { PasswordRecoveryForm } from 'components/PasswordRecoveryForm/PasswordRecoveryForm';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';

import { Container, FormWrapper } from './PasswordRecoveryPage.styled';

const PasswordRecoveryPage = () => {
  const dispatch = useDispatch();
  const { token } = useParams();

  useEffect(() => {
    const accessToken = window.location?.search.split('=')[1];

    dispatch(updateAccessToken(accessToken));
  }, [dispatch]);
  const { t } = useTranslation();

  return (
    <Container>
      <FormWrapper>
        <PasswordRecoveryForm token={token} />
      </FormWrapper>

      <AuthNavigate link="/login" text={t('sidebar.calendar')} />
    </Container>
  );
};

export default PasswordRecoveryPage;
