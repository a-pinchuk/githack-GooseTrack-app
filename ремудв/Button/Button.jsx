import { StyledButton } from './Button.styled';

const Button = ({ type = 'submit', disabled = 'false', children }) => {
  return (
    <>
      <StyledButton type={type} disabled={disabled}>
        {children}
      </StyledButton>
    </>
  );
};

export default Button;
