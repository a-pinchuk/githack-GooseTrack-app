import { LoaderWrapper } from './Loader.styled';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="100"
        width="100"
        strokeColor="#CAE8FF"
        color="#CAE8FF"
        ariaLabel="loader"
      />
    </LoaderWrapper>
  );
};
