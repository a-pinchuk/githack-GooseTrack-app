const { default: styled } = require('styled-components');

export const Review = styled.p`
  padding-left: 12px;
  margin: 0;
  height: ${props => (props.expanded ? 'auto' : '78px')};
  /* height: auto; */

  cursor: pointer;

  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;

  color: rgba(17, 17, 17, 0.7);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;
