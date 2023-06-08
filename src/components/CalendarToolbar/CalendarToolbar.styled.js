import styled from 'styled-components';

export const ToolbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: flex-start;
  margin-bottom: 24px;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    min-width: 704px;
    height: 34px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 100%;
    height: 34px;
    display: flex;
    justify-content: space-between;

    margin-bottom: 38px;
  }
`;
