import React from 'react';

import { FooterStyled } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <div class="footer__text">
        <p class="footer__copyright">© 2023 | All Rights Reserved |</p>
        <div class="footer__author">
          &nbsp;Developed by
          <a href="#" class="footer-team__name">
            "Digital Goose"
          </a>
        </div>
      </div>
    </FooterStyled>
  );
};
