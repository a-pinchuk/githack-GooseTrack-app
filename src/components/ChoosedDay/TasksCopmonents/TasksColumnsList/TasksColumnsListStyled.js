import styled from "styled-components";

export const TaskContainer = styled.ul`
  display: flex;
  width: 100%;
  height: calc(100vh - 80px);
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: start;
  overflow-x: scroll;
  @media screen and (min-width: 1440px) {
    justify-content: center;
    align-items: flex-start;
  }
  /* overflow: hidden; */
`;