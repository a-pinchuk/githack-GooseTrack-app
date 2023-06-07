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
import { useDispatch } from 'react-redux';
import { deleteTask } from 'redux/task/operations';
// import { changeTaskCategory } from 'redux/task/operations';
// import { cleanDigitSectionValue } from '@mui/x-date-pickers/internals/hooks/useField/useField.utils';

export const TasklToolBar = ({ toolbarData, idData, handlerOpenModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const handleMoveCard = id => {
    console.log(id);
  };

  const handleDeleted = id => {
    dispatch(deleteTask(id));
  };
  return (
    <BoxIconBth onMouseLeave={() => setIsVisible(false)}>
      <div></div>
      <IconBthArrow onClick={() => setIsVisible(true)} $isactive={isVisible} />
      <IconBthPencil onClick={() => handlerOpenModal({ id: idData })} />
      <IconBthTrash onClick={() => handleDeleted(idData)} />
      {isVisible && (
        <Tooltip>
          <ul style={{ listStyle: 'none', margin: '0', padding: '0' }}>
            <TooltipButtonItem>
              <TooltipButton onClick={() => handleMoveCard(idData)}>
                {toolbarData[0]}
                <IconBthArrow style={{ margin: '0', marginLeft: '8px' }} />
              </TooltipButton>
            </TooltipButtonItem>
            <TooltipButtonItem>
              <TooltipButton onClick={() => handleMoveCard(idData)}>
                {toolbarData[1]}
                <IconBthArrow style={{ margin: '0', marginLeft: '8px' }} />
              </TooltipButton>
            </TooltipButtonItem>
          </ul>
        </Tooltip>
      )}
    </BoxIconBth>
  );
};
