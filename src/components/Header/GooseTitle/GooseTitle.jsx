import React from 'react';

import gooseHeader from '../../../images/goose-header.png';
import {
  GooseWrapper,
  HeaderTitle,
  TextMessage,
  TextMessagePrimary,
} from './GooseTitle.styled';

export const GooseTitle = () => {
  return (
    <GooseWrapper>
      <img src={gooseHeader} width="64" height="60" alt="goose" />
      <div>
        <HeaderTitle>Calendar</HeaderTitle>
        <TextMessagePrimary>
          Let go
          <TextMessage> of the past and focus on the present!</TextMessage>
        </TextMessagePrimary>
      </div>
    </GooseWrapper>
  );
};
