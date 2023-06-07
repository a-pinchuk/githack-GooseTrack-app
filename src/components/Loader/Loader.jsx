import { LoaderWrapper } from './Loader.styled';
import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <RotatingLines
        height="100"
        width="100"
        strokeColor="#3E85F3"
        ariaLabel="loader"
      />
    </LoaderWrapper>
  );
};
