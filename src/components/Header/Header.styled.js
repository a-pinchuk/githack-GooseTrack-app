import styled from 'styled-components';

export const WrapHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 24px 0 24px;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    padding: 24px 32px 0 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 40px 32px 0 32px;
  }
`;

export const WrapTitleBurger = styled.div`
  display: flex;
`;

export const WrapThemeUserInfo = styled.div`
  display: flex;
  gap: 14px;
`;
