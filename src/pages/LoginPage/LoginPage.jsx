import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAccessToken } from 'redux/auth/authSlice';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { Container, FormWrapper, ImgWrapper } from './LoginPage.styled';

const LoginPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const accessToken = window.location?.search.split('=')[1];

    dispatch(setAccessToken(accessToken));
  }, [dispatch]);
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
