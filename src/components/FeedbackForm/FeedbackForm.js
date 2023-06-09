import { ReactComponent as FavoriteIcon } from 'images/fullStar.svg';
import { ReactComponent as FavoriteBorderIcon } from 'images/emptyStar.svg';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { useEffect } from 'react';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export function FeedbackForm() {
  const [value, setValue] = React.useState(0);
  const [review, setReview] = useState(() => storageValueReview());

  function storageValueReview() {
    const review = localStorage.getItem('review');

    if (review) {
      return JSON.parse(review);
    }

    return '';
  }

  useEffect(() => {
    localStorage.setItem('review', JSON.stringify(review));
  }, [review]);

  const handleFeedbackSubmit = e => {
    e.preventDefault();
    console.log('FeedBack Submit');
  };

  useEffect(() => {
    const review = JSON.parse(localStorage.getItem('review'));
    if (review) {
      setReview(setReview);
    }
  }, []);

  const handleTextareaChange = e => {
    setReview(e.target.value);
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
          // getLabelText={value => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={1}
          icon={<FavoriteIcon fontSize="inherit" width="24px" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" width="24px" />}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ display: 'flex', gap: '2px' }}
        />
      </Box>
      <form onSubmit={handleFeedbackSubmit}>
        <label
          htmlFor="feedback"
          style={
            {
              // outline: '1px solid green'
            }
          }
        >
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
            // outline: '1px solid blue',
            backgroundColor: '#F7F7F7',
            borderRadius: '8px',
            padding: '14px 18px',
            marginTop: '8px',
            marginBottom: '18px',
          }}
          onChange={handleTextareaChange}
        ></textarea>
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
      </form>
    </div>
  );
}
