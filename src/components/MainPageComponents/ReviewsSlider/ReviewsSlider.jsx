import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Slider from 'react-slick';

import { fetchAllReviews } from 'redux/reviews/operations';
import { selectAllReviews } from 'redux/reviews/selectors';
import { ReviewCard } from './ReviewCard';

import { ReviewsContainer } from './ReviewsSlider.styled';

import sprite from 'icons/sprite.svg';

import defaultAvatar from 'images/mainPage/defaultAvatar.jpeg';

const SlickLeft = ({ currentSlide, slideCount, ...props }) => (
  <div
    {...props}
    className={
      'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
    }
    aria-hidden="true"
    aria-disabled={false}
    type="button"
  >
    <svg height="6" width="39" className="svg-arrow">
      <use href={sprite + '#arrow-right-slider'}></use>
    </svg>
  </div>
);

const SlickRight = ({ currentSlide, slideCount, ...props }) => (
  <div
    {...props}
    className={
      'slick-next slick-arrow' +
      (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
    }
    aria-hidden="true"
    aria-disabled={false}
    type="button"
  >
    {' '}
    <svg height="6" width="39" className="svg-arrow">
      <use href={sprite + '#arrow-left-slider'}></use>
    </svg>
  </div>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  nextArrow: <SlickRight />,
  prevArrow: <SlickLeft />,
};

export const ReviewsSlider = () => {
  const { data } = useSelector(selectAllReviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllReviews());
  }, [dispatch]);

  const lastTenReviews = data.slice(-10);

  return (
    <ReviewsContainer>
      <h2>REVIEWS</h2>
      <Slider className="slider" {...settings}>
        {lastTenReviews.map(review => (
          <ReviewCard
            key={review._id}
            src={review.owner.avatarUrl || defaultAvatar}
            num={review.rating}
            name={review.owner.name}
          >
            {review.comment}
          </ReviewCard>
        ))}

        <ReviewCard src={defaultAvatar} num={4} name="Olena Doe">
          GooseTrack is impressive, the calendar view and filter options make it
          easy to stay organized and focused. Highly recommended.
        </ReviewCard>
        <ReviewCard src={defaultAvatar} num={5} name="Alexander Hubbard">
          GooseTrack is incredibly helpful, the sidebar with account management,
          calendar, and filter options make navigation seamless. Great for
          staying organized.
        </ReviewCard>
      </Slider>
    </ReviewsContainer>
  );
};