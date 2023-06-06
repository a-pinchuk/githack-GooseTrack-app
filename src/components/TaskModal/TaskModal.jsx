import { Modal } from 'components/Modal/Modal';
import { TaskForm } from 'components/TaskForm/TaskForm';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// ! task_info
// Edit task
// const initialData = {
//   id: 'id-Tasks',
// };

// ! Create task
// const initialData = {
//   category: 'in-progress',
// };
const TaskModal = ({ task_info, handlerCloseModal }) => {
  const [initialData, setInitialData] = useState(null);
  const { currentDay } = useParams();
  console.log('currentDay', currentDay);

  useEffect(() => {
    const { id, category } = task_info;

    const loadTask = async id => {
      //TODO - read task from bac-end

      setInitialData({
        title: 'My task 1',
        date: '2023-06-01',
        start: '09:10',
        end: '09:40',
        priority: 'low',
        category: 'in-progress',
        statusOperation: 'edit',
      });
    };

    if (id) {
      loadTask(id);
    } else if (category) {
      // todo Треба знайти час завершення останньої тски у вибраний день
      setInitialData({
        title: '',
        date: currentDay,
        start: '09:00',
        end: '09:15',
        priority: 'low',
        category,
        statusOperation: 'create',
      });
    } else {
      handlerCloseModal();
    }
  }, [task_info, handlerCloseModal, currentDay]);

  return (
    <>
      {!!initialData && (
        <Modal handlerCloseModal={handlerCloseModal}>
          <TaskForm
            initialData={initialData}
            handlerCloseModal={handlerCloseModal}
          ></TaskForm>
        </Modal>
      )}
    </>
  );
};

export default TaskModal;
