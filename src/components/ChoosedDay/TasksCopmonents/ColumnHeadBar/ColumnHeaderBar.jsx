import {
  TaskHeaderBox,
  TaskHeaderBth,
  TaskHeaderTitle,
} from './ColumnHeadBarStyled';

export const ColumnHeadBar = ({ title, handlerOpenModal }) => {
  return (
    <TaskHeaderBox>
      <TaskHeaderTitle>{title}</TaskHeaderTitle>;
      <TaskHeaderBth onClick={() => handlerOpenModal({})}>+</TaskHeaderBth>
    </TaskHeaderBox>
  );
};
