import React from 'react';

import gooseHeader from '../../../images/goose_active_task.png';
import gooseHeader2x from '../../../images/goose_active_task@2x.png';

import {
  GooseWrapper,
  HeaderTitle,
  TextMessage,
  TextMessagePrimary,
} from './GooseTitle.styled';

export const GooseTitle = () => {
  return (
    <GooseWrapper>
      <img
        srcSet={`${gooseHeader} 1x, ${gooseHeader2x} 2x`}
        src={gooseHeader}
        width="64"
        height="60"
        alt="goose"
      />
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
