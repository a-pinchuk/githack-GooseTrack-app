import styled from 'styled-components';

export const FormContainer = styled.div`
  margin: 0;
`;

export const RatingText = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  color: ${p => p.theme.colors.modal_form_label};

  margin: 0 0 8px;
`;

export const LabelText = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  color: ${p => p.theme.colors.modal_form_label};

  margin: 0 0 8px;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 127px;
  background-color: ${p => p.theme.colors.textarea_bg};
  border: ${p => p.theme.colors.textarea_border};
  border-radius: 8px;
  padding: 14px 18px;
  margin-bottom: 14px;
  color: ${p => p.theme.colors.second_text_mode};

  :focus {
    outline: none;
    border-width: 1px;
    border-color: #007bff;
  }

  ::placeholder {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 14px;
    line-height: 1.29;
    color: ${p => p.theme.colors.second_text_mode};
    /* color: ${p => p.theme.colors.primary_text_mode}; */
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 18px;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  color: #ffffff;

  border-radius: 8px;
  background-color: #3e85f3;
  color: #ffffff;
  margin-bottom: 28px;
  border: 0;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.25, 0.25, 0.75, 0.75);
  :hover,
  :focus {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    padding: 15px;
    margin-bottom: 32px;
  }
`;

export const StyledEditButton = styled.button`
  width: calc(100% / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  background-color: #e5edfa;
  color: #343434;
  margin-bottom: 32px;
  border: 0;
  cursor: pointer;

  transition: all 200ms cubic-bezier(0.25, 0.25, 0.75, 0.75);
  :hover,
  :focus {
    color: #ffffff;
    background-color: #3e85f3;
  }
`;
