import React from 'react';

import { Container } from './ScrollToTop.styled';

export const ScrollToTop = () => {
  let calcScrollValue = () => {
    let scrollProgress = document.getElementById('scroll-progress');
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = 'grid';
    } else {
      scrollProgress.style.display = 'none';
    }
    scrollProgress.addEventListener('click', () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#3E85F3 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;

  return (
    <Container>
      <div id="scroll-progress">
        {/* <span id="scroll-progress-value">&#x1F815;</span> */}
        <span id="scroll-progress-value">UP</span>
      </div>
    </Container>
  );
};
