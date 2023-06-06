import { Modal } from 'components/Modal/Modal';
import { TaskForm } from 'components/TaskForm/TaskForm';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTaskById } from 'services/apiTasks';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// ! task_info
// Edit task
// const initialData = {
//   id: '647f8c50626766a35b1cd440',
// };

// ! Create task
// const initialData = {
//   category: 'in-progress',
// };
const TaskModal = ({ task_info, handlerCloseModal }) => {
  const [errorFetch, setErrorFetch] = useState(false);

  const [initialData, setInitialData] = useState(null);
  const { currentDay } = useParams();

  useEffect(() => {
    if (errorFetch) {
      Notify.failure(`Error fetch task`);
      handlerCloseModal();
    }
  }, [errorFetch, handlerCloseModal]);

  useEffect(() => {
    const { id, category } = task_info;

    const loadTask = async id => {
      //TODO - read task from bac-end
      const taks = await fetchTaskById(id);
      console.log('taks', taks);
      if (!taks) {
        setErrorFetch(true);
        return;
      }
      setInitialData({ ...taks.data, statusOperation: 'edit' });
    };

    if (id) {
      loadTask(id);
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

export default TaskModal;
