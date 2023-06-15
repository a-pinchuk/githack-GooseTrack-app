import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const CardWrapper = styled.div`
  width: 200px;
  text-align: center;
  overflow: hidden;

  background-color: #fff;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 8px;

  & h3 {
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
    font-weight: bold;
  }

  & p {
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
    /* font-weight: bold; */
  }
`;

export const ImageWrapper = styled.div`
  margin-bottom: 10px;

  & img {
    display: block;
    max-width: 100%;
    height: auto;

    margin-left: auto;
    margin-right: auto;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 5px;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;

    fill: #afb1b8;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      fill: #2196f3;
    }
  }
`;
