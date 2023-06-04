const { default: styled } = require('styled-components');

export const Label = styled.label`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 18px;
`;

export const Input = styled.input`
  margin-top: 8px;
  /* width: 340px; */
  height: 46px;
  left: 0px;
  top: 0px;

  background: #f7f7f7;
  border-radius: 8px;
  border: none;
  padding-left: 18px;
  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;
  margin: 0;
`;

export const EditButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 10px 20px;
  width: 100%;

  background: #3e85f3;
  border-radius: 8px;
  border: none;

  color: white;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;

export const CancelButton = styled(EditButton)`
  background: #efefef;
  color: #111111;
`;

export const RadioButtonsInput = styled.input`
  margin-right: 8px;
`;

export const RadioButtonsLabel = styled.label`
  display: flex;
  align-items: center;
`;
