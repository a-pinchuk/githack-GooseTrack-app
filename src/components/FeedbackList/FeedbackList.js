import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import { ReactComponent as FullLittleStar } from 'images/littleStarFull.svg';
import { ReactComponent as EmptyLittleStar } from 'images/littleStarEmpty.svg';

import { ReactComponent as Pencil } from 'images/tasksSvg/pencil-01.svg';
import { ReactComponent as Trash } from 'images/tasksSvg/trash-04.svg';
import { ReviewItem } from 'components/ReviewItem/ReviewItem';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconButtonContainer,
  ReviewerName,
  AvatarContainer,
  StyledFeedbackList,
  ListItem,
  FeedBackContainer,
  ReviewHeader,
  UserAvatar,
  UserAvatarWrapper,
} from './FeedbackList.styled';

import { deleteReview, fetchUserReviews } from 'redux/reviews/operations';
import { selectAllReviews } from 'redux/reviews/selectors';
import { useEffect } from 'react';

export const IconBthPencil = styled(Pencil)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: ${p => p.theme.colors.primary_text_mode};
  transition: stroke 250ms linear;

  :hover,
  :focus {
    stroke: #3e85f3;
  }
`;

export const IconBthTrash = styled(Trash)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: ${p => p.theme.colors.primary_text_mode};

  transition: stroke 250ms linear;

  :hover,
  :focus {
    stroke: #3e85f3;
  }
`;

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

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

export const FeedbackList = ({ toggleEditFeedback }) => {
  const dispatch = useDispatch();
  const reviews = useSelector(selectAllReviews);

  const hanleDeleteButton = id => {
    dispatch(deleteReview(id));
  };

  useEffect(() => {
    dispatch(fetchUserReviews());
  }, [dispatch]);

  return (
    <StyledFeedbackList>
      {reviews.map(review => (
        <ListItem key={review._id}>
          <AvatarContainer>
            {review.owner.avatarUrl ? (
              <UserAvatarWrapper>
                <UserAvatar src={review.owner.avatarUrl} alt="User avatar" />
              </UserAvatarWrapper>
            ) : (
              <Avatar
                {...stringAvatar(review.name)}
                sx={{
                  width: '32px',
                  height: '32px',
                  '@media (min-width: 768px)': {
                    width: '40px',
                    height: '40px',
                  },
                }}
              />
            )}
          </AvatarContainer>
          <FeedBackContainer>
            <ReviewHeader>
              <ReviewerName>{review.owner.name}</ReviewerName>
              <IconButtonContainer>
                <IconButton
                  sx={{ padding: '4px' }}
                  aria-label="edit"
                  onClick={() =>
                    toggleEditFeedback(
                      review.rating,
                      review.comment,
                      review._id
                    )
                  }
                >
                  <IconBthPencil />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  sx={{ padding: '4px' }}
                  onClick={() => hanleDeleteButton(review._id)}
                >
                  <IconBthTrash />
                </IconButton>
              </IconButtonContainer>
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
            </ReviewHeader>

            <ReviewItem text={review.comment} maxLength={150} />
          </FeedBackContainer>
        </ListItem>
      ))}
    </StyledFeedbackList>
  );
};
