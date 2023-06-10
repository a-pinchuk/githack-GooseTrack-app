import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Review } from './ReviewItem.styled';

export const ReviewItem = ({ text, maxLength }) => {
  const [expanded, setExpanded] = useState(false);
  const myElementRef = useRef(null);
  const [isTextOverflowing, setIsTextOverflowing] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
    console.log('expanded');
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
        console.log('scrollHeight:', scrollHeight);
      }
    };

    console.log(checkTextOverflow());

    checkTextOverflow();
    window.addEventListener('resize', checkTextOverflow);

    return () => {
      window.removeEventListener('resize', checkTextOverflow);
    };
  }, []);

  if (expanded && !isTextOverflowing) {
    console.log('isTextOverflowing:', isTextOverflowing);
    console.log('expanded:', expanded);

    return (
      <Review ref={myElementRef} onClick={handleClick}>
        {text}
      </Review>
    );
  } else {
    const truncatedText = text.substring(0, maxLength) + '...';
    return (
      <Review ref={myElementRef} onClick={handleClick}>
        {truncatedText}
      </Review>
    );
  }
};
