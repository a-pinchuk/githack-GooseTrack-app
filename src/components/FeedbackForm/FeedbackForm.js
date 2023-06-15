import { ReactComponent as FavoriteIcon } from 'images/fullStar.svg';
import { ReactComponent as FavoriteBorderIcon } from 'images/emptyStar.svg';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useState, useEffect } from 'react';
import {
  CharactersQuantityText,
  FormContainer,
  LabelText,
  RatingText,
  StyledButton,
  StyledEditButton,
  StyledTextArea,
  CharactersQuantityTextContainer,
  StyledCancelButton,
} from './FeedbackForm.styled';

import { addReview, updateReview } from '../../redux/reviews/operations';
import { theme } from 'theme';

const EmptyBigStar = styled(FavoriteBorderIcon)`
  fill: ${theme.colors.empty_star};
  stroke: ${theme.colors.empty_star};
`;

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export function FeedbackForm({
  feedback,
  rating,
  toggleEditFeedback,
  isEditFeedbackOpen,
  id,
}) {
  const [value, setValue] = useState(0);
  const [review, setReview] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [changed, setChanged] = useState(false);

  // const { }=useSelector()

  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (isEditFeedbackOpen) {
      setValue(rating);
      setReview(feedback);
      setCharacterCount(feedback.length);
      return;
    }
    const storedReview = localStorage.getItem('review');
    const storedRating = localStorage.getItem('rating');

    if (storedReview) {
      setReview(JSON.parse(storedReview));
      setCharacterCount(JSON.parse(storedReview).length);
    } else {
      setReview('');
    }
    if (storedRating) {
      setValue(JSON.parse(storedRating));
    } else {
      setValue(0);
    }
  }, [feedback, isEditFeedbackOpen, rating]);

  const handleFeedbackSubmit = e => {
    e.preventDefault();
    if (isEditFeedbackOpen) {
      dispatch(updateReview({ id, rating: value, comment: review }));
      toggleEditFeedback();
      setChanged(false);

      return;
    }

    dispatch(
      addReview({
        rating: value,
        comment: review,
      })
    );
    setValue(null);
    setReview('');
    setCharacterCount(0);
    localStorage.setItem('review', JSON.stringify(''));
    localStorage.setItem('rating', JSON.stringify(null));
  };

  const handleTextareaChange = e => {
    const inputValue = e.target.value;
    setReview(inputValue);
    setCharacterCount(inputValue.length);
    if (isEditFeedbackOpen && changed) {
      return;
    }
    if (isEditFeedbackOpen && !changed) {
      setChanged(!changed);
      return;
    }
    localStorage.setItem('review', JSON.stringify(inputValue));
  };

  const handleRatingChange = (e, newValue) => {
    setValue(newValue);
    if (isEditFeedbackOpen && !changed) {
      setChanged(true);
      return;
    }
    if (isEditFeedbackOpen && changed) {
      setChanged(true);
      return;
    }
    localStorage.setItem('rating', JSON.stringify(newValue));
  };

  const isReviewValid = review.length <= 300;
  const isRatingValid = value >= 1;
  // console.log('isRatingValid:', isRatingValid);

  return (
    <FormContainer>
      <RatingText>{t('feedBack.rating')}</RatingText>
      <Box
        sx={{
          '& > legend': { mt: 1 },
          marginBottom: '24px',
        }}
      >
        <StyledRating
          name="customized-color"
          value={value}
          precision={1}
          icon={<FavoriteIcon fontSize="inherit" width="24px" />}
          emptyIcon={<EmptyBigStar fontSize="inherit" width="24px" />}
          onChange={handleRatingChange}
          sx={{ display: 'flex', gap: '2px', maxWidth: '104px' }}
        />
      </Box>
      <form onSubmit={handleFeedbackSubmit}>
        <label htmlFor="feedback">
          <LabelText>{t('feedBack.review')}</LabelText>
        </label>
        <StyledTextArea
          id="feedback"
          placeholder={t('feedBack.placeholder')}
          name="review"
          value={review}
          onChange={handleTextareaChange}
          isReviewValid={isReviewValid}
        ></StyledTextArea>
        <CharactersQuantityTextContainer>
          {characterCount > 0 && (
            <CharactersQuantityText isReviewValid={isReviewValid}>
              Characters entered: {characterCount} (max: 300)
            </CharactersQuantityText>
          )}
        </CharactersQuantityTextContainer>

        {isEditFeedbackOpen ? (
          <div style={{ display: 'flex', gap: '8px' }}>
            <StyledEditButton
              type="submit"
              disabled={!isReviewValid || !value || !review}
              isReviewValid={isReviewValid}
              changed={changed}
              isRatingValid={isRatingValid}
            >
              {t('feedBack.edit')}
            </StyledEditButton>
            <StyledCancelButton
              onClick={() => {
                setChanged(false);
                toggleEditFeedback();
              }}
              type="button"
            >
              {t('feedBack.cancel')}
            </StyledCancelButton>
          </div>
        ) : (
          <StyledButton
            type="submit"
            disabled={!isReviewValid || !value || !review}
          >
            {t('feedBack.save')}
          </StyledButton>
        )}
      </form>
    </FormContainer>
  );
}
