import styled from 'styled-components';

export const Container = styled.div`
  #scroll-progress {
    position: fixed;
    bottom: 30px;
    right: 20px;

    height: 40px;
    width: 40px;

    display: none;
    place-items: center;

    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
      -webkit-box-shadow: 0px 0px 5px 4px #3e85f3;
      -moz-box-shadow: 0px 0px 5px 4px #3e85f3;
      box-shadow: 0px 0px 5px 4px #3e85f3;

      span {
        color: #3e85f3;
      }
    }

    @media screen and (min-width: 768px) {
      bottom: 20px;
      right: 10px;

      height: 70px;
      width: 70px;
    }
  }

  #scroll-progress-value {
    display: block;
    height: calc(100% - 10px);
    width: calc(100% - 10px);
    background-color: #ffffff;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-size: 15px;
    color: #001a2e;

    @media screen and (min-width: 768px) {
      height: calc(100% - 15px);
      width: calc(100% - 15px);

      font-size: 35px;
    }
  }
`;
