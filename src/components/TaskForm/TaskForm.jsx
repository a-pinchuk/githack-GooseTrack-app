import { useState } from 'react';
import {
  EditButton,
  FormGroup,
  Input,
  Label,
  RadioButtonsInput,
  RadioButtonsLabel,
  RadioButtonCustom,
  CancelButton,
  RadioContainer,
} from './TaskForm.styled';
import { addTasks, updateTask } from 'redux/task/operations';
import { ReactComponent as EditPen } from '../../images/editPen.svg';
import { ReactComponent as AddIcon } from '../../images/addIcon.svg';

export const TaskForm = ({ initialData, toggleModal }) => {
  const [titleValue, setTitleValue] = useState('title');
  const [checkboxValue, setCheckboxValue] = useState('low');
  const [startTimeValue, setStartTimeValue] = useState('09:00');
  const [endTimeValue, setEndTimeValue] = useState('15:00');

  const handleChange = event => {
    const { name, value } = event.target;
    console.log(value);

    switch (name) {
      case 'title':
        setTitleValue(value);
        break;
      case 'startTime':
        setStartTimeValue(value);
        break;
      case 'endTime':
        setEndTimeValue(value);
        break;
      case 'priority':
        setCheckboxValue(value);
        break;
      default:
        break;
    }
  };

  const handleAddTask = async () => {
    const taskData = {
      title: titleValue,
      date: initialData.date,
      start: startTimeValue,
      end: endTimeValue,
      priority: checkboxValue,
      category: initialData.category,
    };

    try {
      // must be replaced with if(initialData.id)
      if (true) {
        // Task is being updated
        await updateTask({ id: initialData.id, ...taskData });
        // Update task in the collection
        // ...
      } else {
        // Task is being added
        await addTasks(taskData);
        // Add task to the collection
        // ...
      }

      // Task added/updated successfully, close modal
      toggleModal();
    } catch (error) {
      // Show error message to the user
      console.error(error);
      // Display error message to the user
      // ...
    }
  };

  return (
    <form
      style={{ padding: '40px 28px', display: 'block', position: 'relative' }}
      onSubmit={handleAddTask}
    >
      <Label>
        Title
        <Input
          type="text"
          placeholder="Enter text"
          name="title"
          value={titleValue}
          onChange={handleChange}
          required
        />
      </Label>
      <FormGroup>
        <Label>
          Start
          <Input
            id="time"
            type="time"
            name="startTime"
            value={startTimeValue}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          End
          <Input
            type="time"
            name="endTime"
            value={endTimeValue}
            onChange={handleChange}
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
        <RadioContainer>
          <RadioButtonsLabel>
            <RadioButtonsInput
              type="radio"
              value="low"
              name="priority"
              checked={checkboxValue === 'low'}
              onChange={handleChange}
            />
            <RadioButtonCustom />
            Low
          </RadioButtonsLabel>
        </RadioContainer>
        <RadioContainer>
          <RadioButtonsLabel>
            <RadioButtonsInput
              type="radio"
              value="medium"
              name="priority"
              checked={checkboxValue === 'medium'}
              onChange={handleChange}
            />
            <RadioButtonCustom />
            Medium
          </RadioButtonsLabel>
        </RadioContainer>
        <RadioContainer>
          <RadioButtonsLabel>
            <RadioButtonsInput
              type="radio"
              value="high"
              name="priority"
              checked={checkboxValue === 'high'}
              onChange={handleChange}
            />
            <RadioButtonCustom />
            High
          </RadioButtonsLabel>
        </RadioContainer>
      </div>
      {/* must be replaced with initialData.id */}
      {false ? (
        <EditButton type="submit">
          <EditPen width="14.5px" height="14.5px"></EditPen>
          <span style={{ marginLeft: '9.63px' }}>Edit</span>
        </EditButton>
      ) : (
        <div style={{ display: 'flex', gap: '8px' }}>
          <EditButton type="submit">
            <AddIcon width="11.67px" height="11.67px"></AddIcon>
            <span style={{ marginLeft: '9.63px' }}>Add</span>
          </EditButton>
          <CancelButton type="button" onClick={toggleModal}>
            Cancel
          </CancelButton>
        </div>
      )}
    </form>
  );
};
