import { useMediaQuery } from 'react-responsive';

export const useResponse = () => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return {
    isDesktop,
    isTablet,
    isMobile,
  };
};
