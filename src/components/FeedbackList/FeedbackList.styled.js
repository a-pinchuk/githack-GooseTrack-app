import styled from 'styled-components';

export const StyledFeedbackList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
  width: 100%;
  height: 292px;
  list-style: none;
  background-color: rgba(227, 243, 255, 0.5);
  border-radius: 8px;
  overflow: auto;
  margin: 0;
`;

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  height: auto;
`;

export const AvatarContainer = styled.div`
  width: 40px;
`;

export const StyledReviewContainer = styled.div`
  width: 324px;
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  position: relative;
`;

export const ReviewerName = styled.p`
  margin: 0 0 8px;

  font-family: 'Inter';

  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  color: #343434;
`;

export const IconButtonContainer = styled.div`
  display: flex;
  position: absolute;
  gap: 4px;
  top: 0;
  right: 0;
`;

export const FeedBackContainer = styled.div`
  width: 324px;
`;

export const ReviewHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  position: relative;
`;
