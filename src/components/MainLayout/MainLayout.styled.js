import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding-left: 0;
  padding-right: 0;

  /* margin: 0; */

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${props => props.theme.breakpoints.mobile}) {
    max-width: ${props => props.theme.breakpoints.mobile};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    max-width: ${props => props.theme.breakpoints.table};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    max-width: ${props => props.theme.breakpoints.desktop};
  }
`;

export const Main = styled.main`
  position: relative;

  display: flex;
  height: 100vh;
  /* justify-content: center; */
`;

export const WrapLeftColumn = styled.div`
  height: 100vh;
  width: 225px;

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 289px;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.desktop}) {
    position: absolute;

    transition: all 250ms ease-in-out 0s;
    z-index: 100;

    left: ${p => {
      return p.showSideBar ? '0' : '-1000px';
    }};
  }
`;

export const WrapRightColumn = styled.div`
  flex-grow: 1;
`;
