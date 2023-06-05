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

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioButtonsInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const RadioButtonsLabel = styled.label`
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  align-content: center;
`;

export const RadioButtonCustom = styled.span`
  /* position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 12px;
  vertical-align: middle;
  background-color: inherit;
  color: transparent;
  border: 1px solid transparent;
  border-radius: 15px;

  ${RadioButtonsInput}:checked + & {
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 5px;
      left: 5px;
      width: 10px;
      height: 10px;
      background-color: #01a982;
      border-radius: 12px;
    }

    border-color: #01a982;
  }
  transform: scale(0.6); */

  position: absolute;
  /* top: 0; */
  left: 0;
  width: 10px;
  height: 10px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: #fff;

  /* Define different colors for each radio button */
  ${RadioContainer}:nth-child(1) ${RadioButtonsInput}:checked + & {
    background-color: #72c2f8;
    border-color: #2196f3;
    /* &::after {
      content: '';
      display: block;
      position: absolute;
      top: 5px;
      left: 5px;
      width: 10px;
      height: 10px;
      background-color: #72c2f8;
      border-radius: 10px;
    }
    box-shadow: inset 0px 0px 0px 2px #2196f3;

    border-color: #2196f3; */
  }

  ${RadioContainer}:nth-child(2) ${RadioButtonsInput}:checked + & {
    background-color: #4caf50;
    border-color: #4caf50;
    /* &::after {
      content: '';
      display: block;
      position: absolute;
      top: 5px;
      left: 5px;
      width: 10px;
      height: 10px;
      background-color: #4caf50;
      border-radius: 10px;
    }
    box-shadow: inset 0px 0px 0px 2px #4caf50;

    border-color: #4caf50; */
  }

  ${RadioContainer}:nth-child(3) ${RadioButtonsInput}:checked + & {
    background-color: #f44336;
    border-color: #f44336;
    /* &::after {
      content: '';
      display: block;
      position: absolute;
      top: 5px;
      left: 5px;
      width: 10px;
      height: 10px;
      background-color: #f44336;
      border-radius: 10px;
    }
    box-shadow: inset 0px 0px 0px 2px #f44336;

    border-color: #f44336; */
  }
`;
