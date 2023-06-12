import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { updateAccessToken } from 'redux/auth/authSlice';
import { PasswordRecoveryForm } from 'components/PasswordRecoveryForm/PasswordRecoveryForm';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';

import { Container, FormWrapper } from './PasswordRecoveryPage.styled';

const PasswordRecoveryPage = () => {
  const dispatch = useDispatch();
  const { token } = useParams();
  console.log(token);

  useEffect(() => {
    const accessToken = window.location?.search.split('=')[1];

    dispatch(updateAccessToken(accessToken));
  }, [dispatch]);

  return (
    <Container>
      <FormWrapper>
        <PasswordRecoveryForm accessToken={token} />
      </FormWrapper>

      <AuthNavigate link="/login" text="Log In" />
    </Container>
  );
};

export default PasswordRecoveryPage;
