import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Review } from './ReviewItem.styled';

export const ReviewItem = ({ text, maxLength }) => {
  const [expanded, setExpanded] = useState(false);

  const myElementRef = useRef(null);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const handleOutsideClick = useCallback(e => {
    if (myElementRef.current && !myElementRef.current.contains(e.target)) {
      setExpanded(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('click', handleOutsideClick);

      return () => {
        window.removeEventListener('click', handleOutsideClick);
      };
    }
  }, [handleOutsideClick]);

  const isTextOverflowing = useCallback(() => {
    if (myElementRef.current) {
      const { clientHeight, scrollHeight } = myElementRef.current;
      return scrollHeight > clientHeight;
    }
    return false;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setExpanded(false);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const truncatedText =
    text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

  return (
    <Review
      ref={myElementRef}
      onClick={handleClick}
      expanded={expanded}
      isOverflowing={isTextOverflowing}
    >
      {expanded ? text : truncatedText}
    </Review>
  );
};
