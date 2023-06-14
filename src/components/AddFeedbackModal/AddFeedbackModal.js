import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import { FeedbackList } from 'components/FeedbackList/FeedbackList';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { ModalContent } from './AddFeedbackModal.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAllReviews } from 'redux/reviews/selectors';
import { fetchUserReviews } from 'redux/reviews/operations';

export const AddFeedbackModal = ({ handlerCloseModal }) => {
  const [isEditFeedbackOpen, setisEditFeedbackOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(null);
  const [idReview, setIdReview] = useState(null);
  const dispatch = useDispatch();

  const reviews = useSelector(selectAllReviews);
  // console.log('reviews:', reviews);

  const toggleEditFeedback = (rating, feedback, _id) => {
    if (rating && feedback) {
      setFeedback(feedback);
      setRating(rating);
      setIdReview(_id);
    }

    setisEditFeedbackOpen(!isEditFeedbackOpen);
  };

  useEffect(() => {
    dispatch(fetchUserReviews());
  }, [dispatch]);

  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <ModalContent>
        {isEditFeedbackOpen ? (
          <FeedbackForm
            feedback={feedback}
            rating={rating}
            id={idReview}
            toggleEditFeedback={toggleEditFeedback}
            isEditFeedbackOpen={isEditFeedbackOpen}
          />
        ) : (
          <>
            <FeedbackForm />
            {reviews.length > 0 && (
              <FeedbackList
                reviews={reviews}
                // reviews={reviews}
                toggleEditFeedback={toggleEditFeedback}
                isEditFeedbackOpen={isEditFeedbackOpen}
              />
            )}
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
