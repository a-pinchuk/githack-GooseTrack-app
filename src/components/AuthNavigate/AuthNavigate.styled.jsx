import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledAuthNavigate = styled(NavLink)`
  display: block;

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
`;
