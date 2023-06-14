import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  font-family: 'Inter';
  text-align: center;

  padding: 40px 0;
  background-color: ${p => p.theme.colors.background};

  h1,
  h2,
  p {
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
  }
`;

export const HomeLink = styled(Link)`
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  width: 131px;
  padding-top: 14px;
  padding-bottom: 14px;

  font-family: ${p => p.theme.fonts.text};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.29;
  text-decoration: none;

  color: ${p => p.theme.colors.background};
  background-color: ${p => p.theme.colors.primary};

  border-radius: ${p => p.theme.radii.big};
  box-shadow: ${p => p.theme.shadows.boxShadow};

  opacity: 1;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
