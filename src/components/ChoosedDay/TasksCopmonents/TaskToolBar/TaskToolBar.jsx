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
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from 'redux/task/operations';
import { Modal } from 'components/Modal/Modal';

export const TasklToolBar = ({ toolbarData, idData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [modal, setModal] = useState(false);
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
      <IconBthPencil onClick={() => setModal(true)} />
      <IconBthTrash onClick={() => handleDeleted(idData)} />
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
      {modal && <Modal />}
    </BoxIconBth>
  );
};
