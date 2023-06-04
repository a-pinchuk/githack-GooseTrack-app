import { useState } from 'react';
import {
  EditButton,
  FormGroup,
  Input,
  Label,
  RadioButtonsInput,
  RadioButtonsLabel,
} from './TaskForm.styled';
import { updateTasks } from 'redux/task/operations';

export const TaskForm = ({ children, onClick }) => {
  const [checkboxValue, setCheckboxValue] = useState('low');
  const [startTimeValue, setStartTimeValue] = useState('09:00');
  const [endTimeValue, setEndTimeValue] = useState('15:00');

  const handleStartTimeChange = event => {
    setStartTimeValue(event.target.value);
  };

  const handleEndTimeChange = event => {
    setEndTimeValue(event.target.value);
  };

  const handleCheckboxChange = event => {
    setCheckboxValue(event.target.value);
  };

  return (
    <form
      style={{ padding: '40px 28px', display: 'block', position: 'relative' }}
    >
      <Label>
        Title
        <Input type="text" placeholder="Enter text" name="text" required />
      </Label>
      <FormGroup>
        <Label htmlFor="time">
          Start
          <Input
            id="time"
            type="time"
            name="startTime"
            value={startTimeValue}
            onChange={handleStartTimeChange}
            required
          />
        </Label>
        <Label>
          End
          <Input
            type="time"
            name="enTtime"
            value={endTimeValue}
            onChange={handleEndTimeChange}
            required
          />
        </Label>
      </FormGroup>
      <div
        style={{
          marginTop: '10px',
          marginBottom: '32px',
          display: 'flex',
          gap: '16px',
        }}
      >
        <RadioButtonsLabel>
          <RadioButtonsInput
            type="radio"
            value="low"
            checked={checkboxValue === 'low'}
            onChange={handleCheckboxChange}
          />
          Low
        </RadioButtonsLabel>
        <RadioButtonsLabel>
          <RadioButtonsInput
            type="radio"
            value="medium"
            checked={checkboxValue === 'medium'}
            onChange={handleCheckboxChange}
          />
          Medium
        </RadioButtonsLabel>
        <RadioButtonsLabel>
          <RadioButtonsInput
            type="radio"
            value="high"
            checked={checkboxValue === 'high'}
            onChange={handleCheckboxChange}
          />
          High
        </RadioButtonsLabel>
      </div>
      <EditButton>
        <svg
          width="14.5px"
          height="14.5px"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onSubmit={updateTasks}
        >
          <path
            d="M1.375 16.125L5.53695 14.5242C5.80316 14.4218 5.93626 14.3707 6.06079 14.3038C6.1714 14.2444 6.27685 14.1759 6.37603 14.0989C6.48769 14.0123 6.58853 13.9115 6.79021 13.7098L15.25 5.24998C16.0784 4.42156 16.0784 3.07841 15.25 2.24998C14.4216 1.42156 13.0784 1.42156 12.25 2.24998L3.79021 10.7098C3.58853 10.9115 3.48769 11.0123 3.40104 11.124C3.32408 11.2231 3.25555 11.3286 3.19618 11.4392C3.12933 11.5637 3.07814 11.6968 2.97575 11.963L1.375 16.125ZM1.375 16.125L2.91859 12.1117C3.02905 11.8245 3.08428 11.6809 3.17901 11.6151C3.26179 11.5577 3.36423 11.5359 3.46322 11.5548C3.5765 11.5765 3.68529 11.6853 3.90286 11.9028L5.59718 13.5971C5.81475 13.8147 5.92354 13.9235 5.94517 14.0368C5.96408 14.1358 5.94234 14.2382 5.88486 14.321C5.81909 14.4157 5.67549 14.471 5.3883 14.5814L1.375 16.125Z"
            stroke="white"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>{' '}
        <span style={{ marginLeft: '9.63px' }}>Edit</span>
      </EditButton>
    </form>
  );
};
