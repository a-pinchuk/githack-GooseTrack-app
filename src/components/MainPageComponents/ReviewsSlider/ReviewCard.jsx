import React from 'react';
import Avatar from '@mui/material/Avatar';

import {
  ReviewCardContainer,
  HeaderContainer,
  AvatarWrapper,
  StarContainer,
  CommentText,
} from './ReviewCard.styled';

import sprite from 'icons/sprite.svg';

export const ReviewCard = props => {
  return (
    <ReviewCardContainer>
      <HeaderContainer>
        <AvatarWrapper>
          {props.src ? (
            <img src={props.src} alt="User avatar" />
          ) : (
            <Avatar sx={{ width: 50, height: 50 }}>
              {props.name.charAt(0).toUpperCase()}
            </Avatar>
          )}
        </AvatarWrapper>

        <div>
          <h3>{props.name}</h3>
          <StarContainer value={props.num}>
            <li>
              <svg height="14" width="14">
                <use href={sprite + '#star'}></use>
              </svg>
            </li>
            <li>
              <svg height="14" width="14">
                <use href={sprite + '#star'}></use>
              </svg>
            </li>
            <li>
              <svg height="14" width="14">
                <use href={sprite + '#star'}></use>
              </svg>
            </li>
            <li>
              <svg height="14" width="14">
                <use href={sprite + '#star'}></use>
              </svg>
            </li>
            <li>
              <svg height="14" width="14">
                <use href={sprite + '#star'}></use>
              </svg>
            </li>
          </StarContainer>
        </div>
      </HeaderContainer>

      <CommentText>{props.children}</CommentText>
    </ReviewCardContainer>
  );
};
