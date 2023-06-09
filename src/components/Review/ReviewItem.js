import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Review } from './ReviewItem.styled';

export const ReviewItem = ({ text, maxLength }) => {
  const [expanded, setExpanded] = useState(false);
  const myElementRef = useRef(null);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  // const handleButtonClick = useCallback(e => {
  //   setExpanded(prevExpanded => !prevExpanded);
  // }, []);

  // useEffect(() => {
  //   window.addEventListener('click', handleButtonClick);

  //   return () => {
  //     window.removeEventListener('click', handleButtonClick);
  //   };
  // }, [handleButtonClick]);

  if (text.length <= maxLength || expanded) {
    return (
      <Review onClick={handleClick} expanded>
        {text}
      </Review>
    );
  } else {
    const truncatedText = text.substring(0, maxLength) + '...';
    return (
      <Review onClick={handleClick} expanded ref={myElementRef}>
        {truncatedText}
      </Review>
    );
  }
};
