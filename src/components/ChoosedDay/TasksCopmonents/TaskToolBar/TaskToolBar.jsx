import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
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
import { changeTaskCategory } from 'redux/task/operations';
import { selectTasksError } from 'redux/task/selectors';
import { selectSuccessful } from 'redux/task/selectors';
import { usePopper } from 'react-popper';
import { Portal } from '../Portal/Portal';
// import { cleanDigitSectionValue } from '@mui/x-date-pickers/internals/hooks/useField/useField.utils';

export const TasklToolBar = ({ toolbarData, idData, handlerOpenModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const erorr = useSelector(selectTasksError);
  const successful = useSelector(selectSuccessful);
  const dispatch = useDispatch();

  //Вытащить Тултип наверх----------------------------
  const [referenceElement, setReferenceElement] = useState();
  const [popperElement, setPopperElement] = useState();

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'right-start',
  });

  const handleMoveOne = () => {
    if (successful) {
      dispatch(
        changeTaskCategory({
          id: idData,
          category: toolbarData[0],
        })
      );
      setIsVisible(false);
    }
    if (erorr) {
      Notify.failure(`wrong category`);
    }
  };

  const handleMoveTow = () => {
    if (successful) {
      dispatch(
        changeTaskCategory({
          id: idData,
          category: toolbarData[1],
        })
      );
      setIsVisible(false);
    }
    if (erorr) {
      Notify.failure(`wrong category`);
    }
  };

  const handleDeleted = id => {
    dispatch(deleteTask(id));
  };

  return (
    <BoxIconBth onMouseLeave={() => setIsVisible(false)}>
      <IconBthArrow
        ref={setReferenceElement}
        onClick={() => setIsVisible(true)}
        $isactive={isVisible}
      />
      <IconBthPencil onClick={() => handlerOpenModal({ id: idData })} />
      <IconBthTrash onClick={() => handleDeleted(idData)} />
      {isVisible && (
        <Portal>
          <Tooltip
            ref={setPopperElement}
            style={{ ...styles.popper, top: '25px', left: '-10px' }}
            {...attributes.popper}
          >
            <ul style={{ listStyle: 'none', margin: '0', padding: '0' }}>
              <TooltipButtonItem>
                <TooltipButton onClick={() => handleMoveOne(idData)}>
                  {toolbarData[0]}
                  <IconBthArrow style={{ margin: '0', marginLeft: '8px' }} />
                </TooltipButton>
              </TooltipButtonItem>
              <TooltipButtonItem>
                <TooltipButton onClick={() => handleMoveTow(idData)}>
                  {toolbarData[1]}
                  <IconBthArrow style={{ margin: '0', marginLeft: '8px' }} />
                </TooltipButton>
              </TooltipButtonItem>
            </ul>
          </Tooltip>
        </Portal>
      )}
    </BoxIconBth>
  );
};
