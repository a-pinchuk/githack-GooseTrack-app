import { useTranslation } from 'react-i18next';
import { ButtonBox, ButtonTask } from './AddTasksBthStyled';

export const AddTasksBth = ({ handlerOpenModal }) => {
  const { t } = useTranslation();
  return (
    <ButtonBox>
      <ButtonTask onClick={() => handlerOpenModal({})}>
        <span>+</span>
        {t('calendarPage.daySection.toDo.addTaskBtn')}
      </ButtonTask>
    </ButtonBox>
  );
};
