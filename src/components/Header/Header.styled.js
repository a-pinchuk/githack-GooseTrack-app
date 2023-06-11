import styled from 'styled-components';

export const HeaderTitle = styled.h3`
  display: none;

  font-family: ${props => props.theme.fonts.heading};
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;

  color: ${props => props.theme.colors.primary_text_mode};
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: block;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
`;

export const MobileMenuBtn = styled.button`
  color: ${props => props.theme.colors.primary_text_mode};
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const RighSectiontHeader = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
