import styled from 'styled-components';

export const FooterStyled = styled.footer`
  height: auto;
  padding-bottom: 15px;

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

  & p {
    margin: 0;
    padding: 0;

    @media screen and (max-width: 767px) {
      padding-bottom: 5px;
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
