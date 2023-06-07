import { ButtonBox, ButtonTask } from './AddTasksBthStyled';

export const AddTasksBth = ({ handlerOpenModal }) => {
  return (
    <ButtonBox>
      <ButtonTask onClick={() => handlerOpenModal({})}>
        <span>+</span>Add task
      </ButtonTask>
    </ButtonBox>
  );
};
