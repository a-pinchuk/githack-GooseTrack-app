import React from 'react';

import { LoginForm } from 'components/LoginForm/LoginForm';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { Container, FormWrapper, ImgWrapper } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <Container>
      <FormWrapper>
        <LoginForm />
      </FormWrapper>

      <AuthNavigate link="/register" text="Sign up" />
<a href="http://localhost:3000/api/users/google">Login with Google</a>
      <ImgWrapper />
    </Container>
  );
};

export default LoginPage;
