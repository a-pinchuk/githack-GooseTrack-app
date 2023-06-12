import React from 'react';

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
      <Description />
      <ReviewsSlider />
      <ScrollToTop />
    </>
  );
};

export default MainPage;
