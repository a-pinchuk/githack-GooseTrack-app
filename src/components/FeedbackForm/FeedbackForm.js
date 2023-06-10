import { ReactComponent as FavoriteIcon } from 'images/fullStar.svg';
import { ReactComponent as FavoriteBorderIcon } from 'images/emptyStar.svg';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useState, useEffect } from 'react';
import {
  FormContainer,
  LabelText,
  RatingText,
  StyledButton,
  StyledEditButton,
  StyledTextArea,
} from './FeedbackForm.styled';

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
}) {
  const [value, setValue] = useState(0);
  const [review, setReview] = useState('');

  useEffect(() => {
    console.log('useEffect:');

    if (isEditFeedbackOpen) {
      setValue(rating);
      setReview(feedback);
      return;
    }
    const storedReview = localStorage.getItem('review');
    const storedRating = localStorage.getItem('rating');
    console.log('storedRating:', storedRating);
    if (storedReview) {
      setReview(JSON.parse(storedReview));
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
      console.log('EDIT');
      toggleEditFeedback();
      return;
    }
    console.log('Feedback Submit');
  };

  const handleTextareaChange = e => {
    setReview(e.target.value);
    if (isEditFeedbackOpen) {
      return;
    }
    localStorage.setItem('review', JSON.stringify(review));
  };

  const handleRatingChange = (e, newValue) => {
    setValue(newValue);
    if (isEditFeedbackOpen) {
      return;
    }
    localStorage.setItem('rating', JSON.stringify(newValue));
  };

  return (
    <FormContainer>
      <RatingText>Rating</RatingText>
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
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" width="24px" />}
          onChange={handleRatingChange}
          sx={{ display: 'flex', gap: '2px' }}
        />
      </Box>
      <form onSubmit={handleFeedbackSubmit}>
        <label htmlFor="feedback">
          <LabelText>Review</LabelText>
        </label>
        <StyledTextArea
          id="feedback"
          placeholder="Enter text"
          name="review"
          value={review}
          onChange={handleTextareaChange}
        ></StyledTextArea>
        {isEditFeedbackOpen ? (
          <div style={{ display: 'flex', gap: '8px' }}>
            <StyledEditButton type="submit">Edit</StyledEditButton>
            <StyledEditButton onClick={toggleEditFeedback} type="button">
              Cancel
            </StyledEditButton>
          </div>
        ) : (
          <StyledButton type="submit">Save</StyledButton>
        )}
      </form>
    </FormContainer>
  );
}
