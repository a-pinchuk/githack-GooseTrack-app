import React from 'react';

import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import {
  Container,
  FormWrapper,
  ImgWrapper,
  Link,
} from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <Container>
      <FormWrapper>
        <RegisterForm />
      </FormWrapper>

      <AuthNavigate link="/login" text="Log In" />

      <Link href="https://githack-goosetrack.onrender.com/api/users/google">
        Sign Up with Google
      </Link>
      <ImgWrapper />
    </Container>
  );
};

export default RegisterPage;
