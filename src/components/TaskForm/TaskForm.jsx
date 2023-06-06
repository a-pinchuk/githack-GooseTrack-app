import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  WrapForm,
  Form,
  EditButton,
  FormGroup,
  Input,
  Label,
  RadioButtonsInput,
  RadioButtonsLabel,
  RadioButtonCustom,
  CancelButton,
  RadioContainer,
  WrapRadio,
  WrapButton,
  IconEditPen,
  IconPlus,
} from './TaskForm.styled';

import { addTask, updateTask } from 'redux/task/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectSuccessful, selectTasksError } from 'redux/task/selectors';

const emptyTask = {
  title: '',
  start: '00:00',
  end: '00:00',
  priority: 'low',
  category: 'in-progress',
};

//  const initialData = {
//    title: 'My task 1',
//    date: '2023-06-01',
//    start: '09:10',
//    end: '09:40',
//    priority: 'low',
//    category: 'in-progress',
//    statusOperation: 'create',
//  };
export const TaskForm = ({ initialData, handlerCloseModal }) => {
  const [informationTask, setInformationTask] = useState(emptyTask);
  const [operation, setOperation] = useState('create');
  const [dateSave, setDataSave] = useState(null);

  const dispatch = useDispatch();
  const successful = useSelector(selectSuccessful);
  const error = useSelector(selectTasksError);

  useEffect(() => {
    const { statusOperation, ...information } = initialData;
    console.log('🚀 ~ statusOperation:', statusOperation);
    setInformationTask(information);
    setOperation(statusOperation);
  }, [initialData]);

  useEffect(() => {
    if (!successful || !dateSave) return;
    console.log('Close window');
    handlerCloseModal();
  }, [dateSave, successful, handlerCloseModal]);

  useEffect(() => {
    if (!error) return;
    Notify.failure(`Data save error`);
  }, [error]);

  const handleChange = event => {
    const { name, value } = event.target;
    setInformationTask(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (operation === 'edit') {
      dispatch(updateTask(informationTask));
    } else {
      dispatch(addTask(informationTask));
    }
    setDataSave(Date.now());
  };

  return (
    <WrapForm>
      <Form onSubmit={handleSubmit}>
        <Label>
          Title
          <Input
            type="text"
            placeholder="Enter text"
            name="title"
            value={informationTask.title}
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
              name="start"
              value={informationTask.start}
              onChange={handleChange}
              required
            />
          </Label>
          <Label>
            End
            <Input
              type="time"
              name="end"
              value={informationTask.end}
              onChange={handleChange}
              required
            />
          </Label>
        </FormGroup>

        <WrapRadio>
          <RadioContainer>
            <RadioButtonsLabel>
              <RadioButtonsInput
                type="radio"
                value="low"
                name="priority"
                checked={informationTask.priority === 'low'}
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
                checked={informationTask.priority === 'medium'}
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
                checked={informationTask.priority === 'high'}
                onChange={handleChange}
              />
              <RadioButtonCustom />
              High
            </RadioButtonsLabel>
          </RadioContainer>
        </WrapRadio>

        {/* must be replaced with initialData.id */}
        {operation === 'edit' ? (
          <EditButton type="submit">
            <IconEditPen />
            Edit
          </EditButton>
        ) : (
          <WrapButton>
            <EditButton type="submit">
              <IconPlus />
              Add
            </EditButton>

            <CancelButton type="button" onClick={handlerCloseModal}>
              Cancel
            </CancelButton>
          </WrapButton>
        )}
      </Form>
    </WrapForm>
  );
};
