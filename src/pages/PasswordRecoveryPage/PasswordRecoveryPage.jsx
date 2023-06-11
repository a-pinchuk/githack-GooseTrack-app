import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { updateAccessToken } from 'redux/auth/authSlice';
import { PasswordRecoveryForm } from 'components/PasswordRecoveryForm/PasswordRecoveryForm';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';

import { Container, FormWrapper } from './PasswordRecoveryPage.styled';

const PasswordRecoveryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = window.location?.search.split('=')[1];

    dispatch(updateAccessToken(accessToken));
  }, [dispatch]);

  return (
    <Container>
      <FormWrapper>
        <PasswordRecoveryForm />
      </FormWrapper>

      <AuthNavigate link="/login" text="Log In" />
    </Container>
  );
};

export default PasswordRecoveryPage;
