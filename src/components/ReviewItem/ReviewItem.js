import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Review } from './ReviewItem.styled';

export const ReviewItem = ({ text, maxLength }) => {
  const [expanded, setExpanded] = useState(false);

  const myElementRef = useRef(null);
  const [isTextOverflowing, setIsTextOverflowing] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const handleOutsideClick = useCallback(e => {
    if (myElementRef.current && !myElementRef.current.contains(e.target)) {
      setExpanded(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  useEffect(() => {
    const checkTextOverflow = () => {
      if (myElementRef.current) {
        const { clientHeight, scrollHeight } = myElementRef.current;
        setIsTextOverflowing(scrollHeight > clientHeight);
      }
    };

    checkTextOverflow();
    window.addEventListener('resize', checkTextOverflow);

    return () => {
      window.removeEventListener('resize', checkTextOverflow);
    };
  }, []);

  if (expanded || !isTextOverflowing) {
    return (
      <Review ref={myElementRef} onClick={handleClick} expanded={expanded}>
        {text}
      </Review>
    );
  } else if (isTextOverflowing) {
    const truncatedText = text.substring(0, maxLength) + '...';
    return (
      <Review ref={myElementRef} onClick={handleClick} expanded={expanded}>
        {truncatedText}
      </Review>
    );
  } else {
    return (
      <Review ref={myElementRef} onClick={handleClick} expanded={expanded}>
        {text}
      </Review>
    );
  }
};
