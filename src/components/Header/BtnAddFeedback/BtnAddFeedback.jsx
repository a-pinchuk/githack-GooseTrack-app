import { useTranslation } from 'react-i18next';
import { AddFeedbackBtn } from './BtnAddFeedback.styled';

const BtnAddFeedback = ({ handlerShowModal }) => {
  const { t } = useTranslation();
  return (
    <AddFeedbackBtn onClick={handlerShowModal}>
      {t('calendarPage.header.feedback')}
    </AddFeedbackBtn>
  );
};

export default BtnAddFeedback;
