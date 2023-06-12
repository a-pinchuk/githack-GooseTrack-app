import styled from 'styled-components';
import { ReactComponent as Pencil } from 'images/tasksSvg/pencil-01.svg';
import { ReactComponent as Trash } from 'images/tasksSvg/trash-04.svg';
import { theme } from 'theme';

export const IconBthPencil = styled(Pencil)`
  cursor: pointer;
  width: 16px;
  height: 16px;

  stroke: ${theme.colors.primary_text_mode};
  transition: stroke 250ms linear;

  :hover,
  :focus {
    stroke: ${theme.colors.secondary};
  }
`;

/* stroke: ${p => p.theme.colors.primary_text_mode}; */
/* stroke: ${p => p.theme.colors.primary_text_mode}; */
export const IconBthTrash = styled(Trash)`
  cursor: pointer;
  width: 16px;
  height: 16px;

  stroke: ${theme.colors.primary_text_mode};
  transition: stroke 250ms linear;

  :hover,
  :focus {
    stroke: ${theme.colors.secondary};
  }
`;

export const StyledFeedbackList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
  width: 100%;
  height: auto;
  max-height: 292px;
  list-style: none;
  /* background-color: rgba(227, 243, 255, 0.5); */
  background-color: ${p => p.theme.colors.reviews_list};

  border-radius: 8px;
  overflow: auto;
  margin: 0;
`;

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  height: auto;
  /* color: white; */
`;

export const AvatarContainer = styled.div`
  width: 32px;

  @media screen and (min-width: 768px) {
    width: 40px;
  }
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

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
  }
  color: ${p => p.theme.colors.third_text_mode};
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
  color: wheat;
`;

export const ReviewHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  position: relative;
`;

export const UserAvatar = styled.img`
  height: auto;
  width: 100%;
`;

export const UserAvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
