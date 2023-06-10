import styled from 'styled-components';

export const FormContainer = styled.div`
  margin: 0;
`;

export const RatingText = styled.p`
  margin: 0 0 8px;
`;

export const StyledTextArea = styled.textarea`
  width: 404px;
  height: 127px;
  background-color: #f7f7f7;
  border-width: 0;
  border-radius: 8px;
  padding: 14px 18px;
  margin-top: 8px;
  margin-bottom: 18px;

  :focus {
    outline: none;
    border-width: 1px;
    border-color: #007bff;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  background-color: #3e85f3;
  color: #ffffff;
  margin-bottom: 32px;
  border: 0;
`;

export const StyledEditButton = styled.button`
  width: calc(100% / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  background-color: #3e85f3;
  color: #ffffff;
  margin-bottom: 32px;
  border: 0;
`;
