import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: #ffffff;
  height: 100px;

  @media screen and (min-width: 768px) {
    height: 77px;
  }

  .footer-team__name {
    color: #3e85f3;
    margin-left: 5px;
  }

  .footer__text {
    padding-top: 29px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;

    text-align: center;
    color: #343434;

    @media screen and (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      line-height: 1.18;
    }
  }

  .footer__copyright {
    @media screen and (max-width: 767px) {
      margin-bottom: 5px;
    }
  }

  .footer__author {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
