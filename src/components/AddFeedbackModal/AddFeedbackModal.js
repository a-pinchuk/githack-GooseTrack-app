import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import { FeedbackList } from 'components/FeedbackList/FeedbackList';
import { Modal } from 'components/Modal/Modal';
import { useSelector } from 'react-redux';
import { selectAllReviews } from 'redux/reviews/selectors';

export const AddFeedbackModal = ({ handlerCloseModal }) => {
  const allReviews = useSelector(selectAllReviews);
  console.log('allReviews:', allReviews);

  const reviews = [
    { name: 'Alex', rating: 5, feedback: 'qweqweqweqweqwe' },
    { name: 'Suoer Mario', rating: 4, feedback: 'asdasdasdasd' },
  ];

  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <div
        style={{
          outline: '1px solid purple',
          height: '673px',
          padding: '32px',
          width: '468px',
        }}
      >
        <FeedbackForm />
        <FeedbackList reviews={reviews} />
      </div>
    </Modal>
  );
};
