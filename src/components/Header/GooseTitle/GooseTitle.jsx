import React from 'react';
import { useTranslation } from 'react-i18next';
import gooseHeader from '../../../images/goose_active_task.png';
import gooseHeader2x from '../../../images/goose_active_task@2x.png';
import {
  GooseWrapper,
  HeaderTitle,
  TextMessage,
  TextMessagePrimary,
} from './GooseTitle.styled';

export const GooseTitle = () => {
  const { t } = useTranslation();
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
        <HeaderTitle> {t('calendarPage.header.title')}</HeaderTitle>
        <TextMessagePrimary>
          {t('calendarPage.header.action')}
          <TextMessage> {t('calendarPage.header.phrase')}</TextMessage>
        </TextMessagePrimary>
      </div>
    </GooseWrapper>
  );
};
