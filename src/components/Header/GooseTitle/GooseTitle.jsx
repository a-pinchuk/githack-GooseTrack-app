import React from 'react';
import { useTranslation } from 'react-i18next';
import gooseHeader from '../../../images/goose-header.png';
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
      <img src={gooseHeader} width="64" height="60" alt="goose" />
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
