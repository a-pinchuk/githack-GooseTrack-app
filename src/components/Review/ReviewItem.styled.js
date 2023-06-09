const { default: styled } = require('styled-components');

export const Review = styled.p`
  padding-left: 12px;
  margin: 0;

  height: ${props => (props.expanded ? 'auto' : '100px')};
  cursor: ${props => (props.expanded ? 'pointer' : 'auto')};
`;
