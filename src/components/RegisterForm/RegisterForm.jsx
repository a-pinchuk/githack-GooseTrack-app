import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Wrapper, StyledForm, StyledButton } from './RegisterForm.styled';

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit} autoComplete="off">
        <p>Sign Up</p>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Email must be in the format username@domain.com"
            required
          />
        </label>
        <label>
          Password
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Password must contain at least one number, one lowercase and one uppercase letter, and be at least 8 characters long."
            required
          />
          <button onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'} Password
          </button>
        </label>
        <StyledButton type="submit">Sign Up</StyledButton>
      </StyledForm>
    </Wrapper>
  );
};
