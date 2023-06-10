import React from 'react';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import styled from 'styled-components';

import { ReactComponent as FullLittleStar } from 'images/littleStarFull.svg';
import { ReactComponent as EmptyLittleStar } from 'images/littleStarEmpty.svg';

import { ReactComponent as Pencil } from 'images/tasksSvg/pencil-01.svg';
import { ReactComponent as Trash } from 'images/tasksSvg/trash-04.svg';

export const IconBthPencil = styled(Pencil)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: black;
  transition: stroke 250ms linear;
  margin-right: 10px;
  &:hover {
    stroke: #3e85f3;
  }
`;

export const IconBthTrash = styled(Trash)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: black;
  transition: stroke 250ms linear;
  &:hover {
    stroke: #3e85f3;
  }
`;

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  if (name.split(' ').length > 1)
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}`,
  };
}

export const FeedbackList = ({ reviews }) => {
  return (
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '16px',

        // outline: '1px solid tomato',
        width: '100%',
        height: '292px',
        listStyle: 'none',

        backgroundColor: 'rgba(227, 243, 255, 0.5)',
        borderRadius: ' 8px',
        overflow: 'scroll',
        margin: '0',
      }}
    >
      {reviews.map((review, i) => (
        <li
          key={i}
          style={{
            // outline: '1px solid pink',
            width: '100%',
            display: 'flex',
          }}
        >
          <div
            style={{
              //   outline: '1px solid red',
              width: '40px',
            }}
          >
            <Avatar {...stringAvatar(review.name)} />
          </div>
          <div
            style={{
              //   outline: '1px solid orange',
              width: '324px',
            }}
          >
            <div
              style={{
                // outline: '1px solid tomato',
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: '12px',
                position: 'relative',
              }}
            >
              <p style={{ margin: '0 0 8px' }}>{review.name}</p>
              <div
                style={{
                  display: 'flex',
                  position: 'absolute',
                  top: '0',
                  right: '0',
                }}
              >
                <IconBthPencil />
                <IconBthTrash />
              </div>
              <Box
                sx={{
                  //   width: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '12px',
                }}
              >
                <Rating
                  name="text-feedback"
                  value={review.rating}
                  readOnly
                  precision={1}
                  icon={<FullLittleStar fontSize="inherit" />}
                  emptyIcon={<EmptyLittleStar fontSize="inherit" />}
                  sx={{ display: 'flex', gap: '8px' }}
                />
              </Box>
            </div>

            <p style={{ paddingLeft: '12px', margin: '0' }}>
              {review.feedback}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
