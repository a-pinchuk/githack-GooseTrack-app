import React from 'react';
import LanguageSwitcher from '../../components/MainPageComponents/AuthSection/LanguageSwitcher';

import {
  AuthSection,
  Description,
  ReviewsSlider,
  ScrollToTop,
} from 'components/MainPageComponents';

const MainPage = () => {
  return (
    <>
      <AuthSection />
      <LanguageSwitcher position="header" />
      <Description />
      <ReviewsSlider />
      <ScrollToTop />
    </>
  );
};

export default MainPage;
