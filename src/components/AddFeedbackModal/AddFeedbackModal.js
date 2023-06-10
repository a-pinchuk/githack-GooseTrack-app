import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import { FeedbackList } from 'components/FeedbackList/FeedbackList';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { ModalContent } from './AddFeedbackModal.styled';
// import { useSelector } from 'react-redux';
// import { selectAllReviews } from 'redux/reviews/selectors';

export const AddFeedbackModal = ({ handlerCloseModal }) => {
  // const allReviews = useSelector(selectAllReviews);
  // console.log('allReviews:', allReviews);

  const [isEditFeedbackOpen, setisEditFeedbackOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(null);

  console.log('isEditFeedbackOpen:', isEditFeedbackOpen);

  const toggleEditFeedback = (rating, feedback) => {
    if (rating && feedback) {
      setFeedback(feedback);
      setRating(rating);
    }

    setisEditFeedbackOpen(!isEditFeedbackOpen);
  };

  const reviews = [
    {
      name: 'Super Mario',
      rating: 5,
      feedback:
        'Eos eu tantas nonumes accusam, id mutat noluisse pertinacia pro! Laboramus mnesarchum philosophia eu per. Usu ne nulla errem gloriatur, te quo sapientem suavitate? Altera disputando concludaturque te mel, at vix sint veniam, ipsum molestie efficiantur in sed. His dicit dolorum omnesque ne, ei timeam consetetur sit, mea affert vocent qualisque at!',
    },
    {
      name: 'Super Mario',
      rating: 3,
      feedback:
        'Tantas nonumes accusam, id mutat noluisse pertinacia pro! Laboramus mnesarchum philosophia eu per. Usu ne nulla errem gloriatur, te quo sapientem suavitate? Altera disputando concludaturque te mel, at vix sint veniam, ipsum molestie efficiantur in sed. His dicit dolorum omnesque ne, ei timeam consetetur sit, mea affert vocent qualisque at!',
    },
  ];

  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <ModalContent>
        {isEditFeedbackOpen ? (
          <FeedbackForm
            feedback={feedback}
            rating={rating}
            toggleEditFeedback={toggleEditFeedback}
            isEditFeedbackOpen={isEditFeedbackOpen}
          />
        ) : (
          <>
            <FeedbackForm />
            <FeedbackList
              reviews={reviews}
              toggleEditFeedback={toggleEditFeedback}
              isEditFeedbackOpen={isEditFeedbackOpen}
            />
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
