import React from 'react';

import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { Container, FormWrapper, ImgWrapper } from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <Container>
      <FormWrapper>
        <RegisterForm />
      </FormWrapper>

      <AuthNavigate link="/login" text="Log In" />

      <ImgWrapper />
    </Container>
  );
};

export default RegisterPage;
