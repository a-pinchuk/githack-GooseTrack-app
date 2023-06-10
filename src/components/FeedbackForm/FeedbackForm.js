import { ReactComponent as FavoriteIcon } from 'images/fullStar.svg';
import { ReactComponent as FavoriteBorderIcon } from 'images/emptyStar.svg';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useState, useEffect } from 'react';

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
    }
    if (storedRating) {
      setValue(JSON.parse(storedRating));
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
    <div>
      <p style={{ margin: '0 0 8px' }}>Rating</p>
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
          <span>Review</span>
        </label>
        <textarea
          id="feedback"
          placeholder="Enter text"
          name="review"
          value={review}
          style={{
            width: '404px',
            height: '127px',
            backgroundColor: '#F7F7F7',
            borderRadius: '8px',
            padding: '14px 18px',
            marginTop: '8px',
            marginBottom: '18px',
          }}
          onChange={handleTextareaChange}
        ></textarea>
        {isEditFeedbackOpen ? (
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              type="submit"
              style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '15px',
                borderRadius: '8px',
                backgroundColor: '#3E85F3',
                color: '#FFFFFF',
                marginBottom: '32px',
                border: '0',
              }}
            >
              Edit
            </button>
            <button
              onClick={toggleEditFeedback}
              type="button"
              style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '15px',
                borderRadius: '8px',
                backgroundColor: '#3E85F3',
                color: '#FFFFFF',
                marginBottom: '32px',
                border: '0',
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            type="submit"
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '15px',
              borderRadius: '8px',
              backgroundColor: '#3E85F3',
              color: '#FFFFFF',
              marginBottom: '32px',
              border: '0',
            }}
          >
            Save
          </button>
        )}
      </form>
    </div>
  );
}
