import React from 'react';
import { LoginForm } from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div>
      <LoginForm />
      <a href="http://localhost:3000/api/users/google">Login with Google</a>
    </div>
  );
};

export default LoginPage;
