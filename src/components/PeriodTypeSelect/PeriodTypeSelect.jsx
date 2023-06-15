import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  DayPeriodTypeBtn,
  MonthPeriodTypeBtn,
  PeriodTypeWrapper,
} from './PeriodTypeSelect.styled';

export const PeriodTypeSelect = ({
  typeSelect,
  typeMonthHendler,
  typeDayHendler,
}) => {
  const { t } = useTranslation();

  return (
    <PeriodTypeWrapper>
      <MonthPeriodTypeBtn
        data-tour="1"
        isActive={typeSelect === 'month'}
        onClick={typeMonthHendler}
      >
        {t('calendarPage.nav.period.monthBtn')}
      </MonthPeriodTypeBtn>
      <DayPeriodTypeBtn
        data-tour="2"
        isActive={typeSelect === 'day'}
        onClick={typeDayHendler}
      >
        {t('calendarPage.nav.period.dayBtn')}
      </DayPeriodTypeBtn>
    </PeriodTypeWrapper>
  );
};
