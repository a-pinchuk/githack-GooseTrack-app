import styled from 'styled-components';

export const FooterStyled = styled.footer`
  height: auto;
  margin-bottom: 15px;

  font-family: 'Inter';
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;

  text-align: center;
  color: #343434;
  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 16px;
    line-height: 1.18;
  }

  @media screen and (min-width: 768px) {
    height: 20px;
  }

  & p {
    margin: 0;
    padding: 0;

    @media screen and (max-width: 767px) {
      margin-bottom: 5px;
    }
  }
`;

export const TeamLink = styled.span`
  color: #2476f1;
  margin-left: 5px;

  text-decoration-line: none;
  cursor: pointer;
`;

// =========  Modal Window  ==================

export const ModalContent = styled.div`
  overflow-y: auto;
  max-height: 100vh;

  height: auto;
  padding: 5px 5px;
  max-width: 335px;

  font-family: 'Inter';
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1.29;

  color: rgba(17, 17, 17, 0.7);
  background-color: #e9e8ec;
  border: ${p => p.theme.borders.normal} rgba(17, 17, 17, 0.1);
  border-radius: ${p => p.theme.radii.small};

  @media screen and (min-width: 768px) {
    padding: 10px 10px;
    max-width: 704px;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 10px;
    max-width: 1107px;
  }

  & h2 {
    margin: 0;
    padding: 0;
    margin-bottom: 15px;
    text-align: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const CardWrapper = styled.div`
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
