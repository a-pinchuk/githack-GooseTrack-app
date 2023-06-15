import React from 'react';

import {
  AuthSection,
  Description,
  ReviewsSlider,
  Footer,
  ScrollToTop,
} from 'components/MainPageComponents';

const MainPage = () => {
  return (
    <>
      <AuthSection />
      <Description />
      <ReviewsSlider />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default MainPage;
