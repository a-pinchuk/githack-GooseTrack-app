import styled from 'styled-components';
import goose_1x from 'images/loginPage/desktop_loginPage.png';
import goose_2x from 'images/loginPage/desktop_loginPage@2x.png';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.theme.colors.bgBlue};

  a {
    display: block;
    margin-top: 8px;

    text-align: center;
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: 1.16;

    color: ${p => p.theme.colors.primary};
    text-decoration: underline;

    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
      0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 1.33;
    }
  }
`;

export const FormWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 18px;

  @media screen and (max-width: 374px) {
    width: 100%;
    max-width: 335px;
  }
  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 480px;
    margin-bottom: 24px;
  }
`;

export const ImgWrapper = styled.div`
  position: absolute;
  width: 368px;
  height: 521px;
  right: 60px;
  bottom: 19px;

  background-image: url(${goose_1x});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2) {
    background-image: url(${goose_2x});
  }
  @media screen and (max-width: 1439px) {
    display: none;
  }
`;
