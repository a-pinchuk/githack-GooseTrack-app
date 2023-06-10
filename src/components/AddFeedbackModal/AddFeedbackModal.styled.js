const { default: styled } = require('styled-components');

export const ModalContent = styled.div`
  height: auto;
  padding: 28px 20px;
  width: 335px;

  @media screen and (min-width: 768px) {
    padding: 32px;
    width: 468px;
  }

  @media screen and (min-width: 1440px) {
    padding: 32px;
    width: 468px;
  }
`;
