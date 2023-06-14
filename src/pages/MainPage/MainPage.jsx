import React from 'react';
import { MainPageSection } from './MainPage.styled';

import {
  AuthSection,
  Description,
  ReviewsSlider,
  ScrollToTop,
} from 'components/MainPageComponents';

const MainPage = () => {
  return (
    <MainPageSection>
      <AuthSection />
      <Description />
      <ReviewsSlider />
      <ScrollToTop />
    </MainPageSection>
  );
};

export default MainPage;
