import React from 'react';
import { useTranslation } from 'react-i18next';

import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import {
  Container,
  FormWrapper,
  ImgWrapper,
  Link,
} from './RegisterPage.styled';

const RegisterPage = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <FormWrapper>
        <RegisterForm />
      </FormWrapper>

      <AuthNavigate link="/login" text={t('nav.signup.form.loginLink')} />
      <Link href="https://githack-goosetrack.onrender.com/api/users/google">
        {t('nav.signup.form.googleLoginLink')}
      </Link>
      <ImgWrapper />
    </Container>
  );
};

export default RegisterPage;
