import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const successful = useSelector(selectSuccessful);
  const error = useSelector(selectTasksError);

  useEffect(() => {
    const { statusOperation, _id, ...information } = initialData;
    if (_id) information.id = _id;
    setInformationTask(information);
    setOperation(statusOperation);
  }, [initialData]);

  useEffect(() => {
    if (!successful || !dateSave) return;

    handlerCloseModal();
  }, [dateSave, successful, handlerCloseModal]);

  useEffect(() => {
    if (!error || !dateSave) return;
    Notify.failure(`Data save error`);
  }, [error, dateSave]);

  const handleChange = event => {
    const { name, value } = event.target;
    setInformationTask(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (informationTask.start > informationTask.end) {
      Notify.failure('Start time cannot be later than end time');
      return;
    }

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
          {t('calendarPage.daySection.task.form.title')}
          <Input
            type="text"
            placeholder={t('calendarPage.daySection.task.form.placeholder')}
            name="title"
            value={informationTask.title}
            onChange={handleChange}
            required
          />
        </Label>
        <FormGroup>
          <Label>
            {t('calendarPage.daySection.task.form.start')}
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
            {t('calendarPage.daySection.task.form.end')}
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
              {t('calendarPage.daySection.task.form.priority.low')}
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
              {t('calendarPage.daySection.task.form.priority.medium')}
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
              {t('calendarPage.daySection.task.form.priority.high')}
            </RadioButtonsLabel>
          </RadioContainer>
        </WrapRadio>

        {/* must be replaced with initialData.id */}
        {operation === 'edit' ? (
          <EditButton type="submit">
            <IconEditPen />
            {t('calendarPage.daySection.task.form.editBtn')}
          </EditButton>
        ) : (
          <WrapButton>
            <EditButton type="submit">
              <IconPlus />
              {t('calendarPage.daySection.task.form.addBtn')}
            </EditButton>

            <CancelButton type="button" onClick={handlerCloseModal}>
              {t('calendarPage.daySection.task.form.cancelBtn')}
            </CancelButton>
          </WrapButton>
        )}
      </Form>
    </WrapForm>
  );
};
