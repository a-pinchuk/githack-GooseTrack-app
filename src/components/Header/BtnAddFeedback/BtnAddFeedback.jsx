import { AddFeedbackBtn } from './BtnAddFeedback.styled';

const BtnAddFeedback = ({ handlerShowModal }) => (
  <AddFeedbackBtn onClick={handlerShowModal}>Feedback</AddFeedbackBtn>
);

export default BtnAddFeedback;
