import { useTranslation } from 'react-i18next';

import { LoginForm } from 'components/LoginForm/LoginForm';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { Container, FormWrapper, ImgWrapper, Link } from './LoginPage.styled';

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <FormWrapper>
        <LoginForm />
      </FormWrapper>

      <AuthNavigate link="/register" text={t('nav.login.form.signupLink')} />

      <Link href="https://githack-goosetrack.onrender.com/api/users/google">
        {t('nav.login.form.googleLoginLink')}
      </Link>
      <ImgWrapper />
    </Container>
  );
};

export default LoginPage;
