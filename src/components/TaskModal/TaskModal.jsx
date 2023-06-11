import { Modal } from 'components/Modal/Modal';
import { TaskForm } from 'components/TaskForm/TaskForm';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// ! task_info
// Edit task
// const initialData = {
//   id: '647f8c50626766a35b1cd440',
// };

// ! Create task
// const initialData = {
//   category: 'in-progress',
// };
export const TaskModal = ({ task_info, handlerCloseModal }) => {
  const [initialData, setInitialData] = useState(null);
  const { currentDay } = useParams();

  useEffect(() => {
    const { _id, category } = task_info;

    if (_id) {
      setInitialData({ ...task_info, statusOperation: 'edit' });
    } else if (category) {
      // todo Треба знайти час завершення останньої тски у вибраний день!
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
