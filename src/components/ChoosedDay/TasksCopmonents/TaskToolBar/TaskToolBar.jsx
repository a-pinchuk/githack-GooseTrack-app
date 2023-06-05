import { useState } from 'react';
import {
  BoxIconBth,
  IconBthArrow,
  IconBthPencil,
  IconBthTrash,
  Tooltip,
  TooltipButton,
  TooltipButtonItem,
} from './TaskToolBarStyled';

export const TasklToolBar = ({ toolbarData, idData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleMoveCard = id => {
    console.log(id);
  };
  return (
    <BoxIconBth onMouseLeave={() => setIsVisible(false)}>
      <div></div>
      <IconBthArrow onClick={() => setIsVisible(true)} $isactive={isVisible} />
      <IconBthPencil />
      <IconBthTrash />
      {isVisible && (
        <Tooltip>
          <ul style={{ listStyle: 'none', margin: '0', padding: '0' }}>
            <TooltipButtonItem>
              <TooltipButton onClick={() => handleMoveCard(idData)}>
                {toolbarData[0]}
                <IconBthArrow style={{ margin: '0' }} />
              </TooltipButton>
            </TooltipButtonItem>
            <TooltipButtonItem>
              <TooltipButton onClick={() => handleMoveCard(idData)}>
                {toolbarData[1]}
                <IconBthArrow style={{ margin: '0' }} />
              </TooltipButton>
            </TooltipButtonItem>
          </ul>
        </Tooltip>
      )}
    </BoxIconBth>
  );
};
