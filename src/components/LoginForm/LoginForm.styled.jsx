import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90vh;
  width: 480px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
  padding: 40px 24px;
  background-color: #fff;
  border-radius: 8px;

  p {
    margin-top: 0;
    margin-bottom: 32px;

    font-weight: 600;
    font-size: 18px;
    line-height: 1.33;
    color: #3e85f3;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;

    font-weight: 600;
    font-size: 12px;
    line-height: 1.25;
    color: #111111;

    &:not(:last-child) {
      margin-bottom: 24px;
    }

    &:nth-of-type(2) {
      margin-bottom: 32px;
    }
  }

  input {
    padding: 14px;
    border-radius: 8px;
    width: 100%;

    font-weight: 400;
    font-size: 14px;
    line-height: 1.29px;
    color: #111111;
  }
`;

export const StyledButton = styled.button`
  padding-top: 14px;
  padding-bottom: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
  border-radius: 16px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: #fff;
  background: #3e85f3;
  text-transform: none;
`;
