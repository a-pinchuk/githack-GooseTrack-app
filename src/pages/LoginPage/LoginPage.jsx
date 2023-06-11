import { LoginForm } from 'components/LoginForm/LoginForm';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { Container, FormWrapper, ImgWrapper, Link } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <Container>
      <FormWrapper>
        <LoginForm />
      </FormWrapper>

      <AuthNavigate link="/register" text="Sign up" />

      <Link href="https://githack-goosetrack.onrender.com/api/users/google">
        Login with Google
      </Link>
      <ImgWrapper />
    </Container>
  );
};

export default LoginPage;
