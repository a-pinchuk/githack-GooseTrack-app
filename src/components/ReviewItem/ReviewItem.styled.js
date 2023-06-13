const { default: styled } = require('styled-components');

export const Review = styled.p`
  padding-left: 12px;
  margin: 0;
  max-height: ${props => {
    if (props.expanded || (!props.expanded && !props.isOverflowing)) {
      return 'auto';
    } else {
      return '78px';
    }
  }};

  /* height: auto; */

  cursor: pointer;

  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }

  color: ${p => p.theme.colors.reviews_content};
`;
