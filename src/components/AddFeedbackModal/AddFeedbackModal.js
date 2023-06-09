import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import { FeedbackList } from 'components/FeedbackList/FeedbackList';
import { Modal } from 'components/Modal/Modal';
// import { useSelector } from 'react-redux';
// import { selectAllReviews } from 'redux/reviews/selectors';

export const AddFeedbackModal = ({ handlerCloseModal }) => {
  // const allReviews = useSelector(selectAllReviews);
  // console.log('allReviews:', allReviews);

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
        'Eos eu tantas nonumes accusam, id mutat noluisse pertinacia pro! Laboramus mnesarchum philosophia eu per. Usu ne nulla errem gloriatur, te quo sapientem suavitate? Altera disputando concludaturque te mel, at vix sint veniam, ipsum molestie efficiantur in sed. His dicit dolorum omnesque ne, ei timeam consetetur sit, mea affert vocent qualisque at!',
    },
  ];

  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <div
        style={{
          // outline: '1px solid purple',
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
