import styled from 'styled-components';

export const ReviewsContainer = styled.section`
  position: relative;

  width: 335px;
  min-height: 324px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 64px;

  font-family: ${p => p.theme.fonts.text};
  background-color: ${p => p.theme.colors.background};

  @media screen and (min-width: 768px) {
    width: 704px;
    min-height: 360px;

    margin-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    width: 1184px;
    min-height: 374px;

    margin-bottom: 118px;
  }

  h2 {
    font-size: 28px;
    line-height: 1.14;
    text-align: center;

    margin-top: 0;
    margin-bottom: 40px;

    color: ${p => p.theme.colors.primary};

    @media screen and (min-width: 768px) {
      font-size: ${p => p.theme.fontSizes.l};
      line-height: ${p => p.theme.lineHeights.heading};

      margin-bottom: 50px;
    }
  }

  & .slider {
    height: fit-content;
  }

  & .slick-track {
    display: flex;
  }

  & .slick-list {
    overflow: hidden;
  }

  & .slick-arrow {
    position: absolute;
    bottom: 0;
    z-index: 10;
  }

  & svg.svg-arrow {
    width: 39px;
    height: 50px;

    fill: ${p => p.theme.colors.black};

    &:hover,
    &:focus {
      fill: ${p => p.theme.colors.primary};
    }

    @media screen and (min-width: 768px) {
      width: 47px;
      height: 61px;
    }
  }

  & .slick-arrow.slick-prev {
    display: flex;
    align-items: center;

    width: 39px;
    height: 50px;
    left: calc(50% + 15px);

    cursor: pointer;

    @media screen and (min-width: 768px) {
      width: 47px;
      height: 61px;
    }
  }

  & .slick-arrow.slick-next {
    width: 39px;
    height: 50px;
    right: calc(50% + 15px);

    cursor: pointer;

    & svg.svg-arrow {
      margin-left: auto;
    }

    @media screen and (min-width: 768px) {
      width: 47px;
      height: 61px;
    }
  }
`;
