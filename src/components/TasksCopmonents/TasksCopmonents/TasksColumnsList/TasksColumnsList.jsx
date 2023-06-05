import { TasksColumn } from '../TasksColumn/TasksColumn';
import { TaskContainer } from '../TasksColumnsList/TasksColumnsListStyled';

export const TasksColumnsList = () => {
  //----Заглушка
  const title = ['To do', 'In progress', 'Done'];
  const mainArray = [
    {
      category: 'in-progress',
      createdAt: '2023-06-02T18:37:25.149Z',
      date: '2023-06-27',
      end: '18:48',
      priority: 'medium',
      start: '18:05',
      title: 'i have change status',
      updatedAt: '2023-06-02T18:37:25.149Z',
      _id: '647a36e501a3371dd3c04599',
    },
    {
      category: 'in-progress',
      createdAt: '2023-06-02T18:37:25.149Z',
      date: '2023-06-27',
      end: '18:48',
      priority: 'low',
      start: '18:05',
      title: 'My task  medium in-progress 18:05-18:48',
      updatedAt: '2023-06-02T18:37:25.149Z',
      _id: '647a36e501a3371dd3c04592',
    },
    {
      category: 'done',
      createdAt: '2023-06-02T18:37:25.149Z',
      date: '2023-06-27',
      end: '18:48',
      priority: 'low',
      start: '18:05',
      title: 'My task  medium in-progress 18:05-18:48',
      updatedAt: '2023-06-02T18:37:25.149Z',
      _id: '647a36e501a3371dd3c04511',
    },
    {
      category: 'done',
      createdAt: '2023-06-02T18:37:25.149Z',
      date: '2023-06-27',
      end: '18:48',
      priority: 'low',
      start: '18:05',
      title: 'My task  go to drink vodka 18:05-18:48',
      updatedAt: '2023-06-02T18:37:25.149Z',
      _id: '647a36e501a3371dd3c04513',
    },
    {
      category: 'to-do',
      createdAt: '2023-06-02T18:37:25.149Z',
      date: '2023-06-27',
      end: '18:48',
      priority: 'medium',
      start: '18:05',
      title: 'done task',
      updatedAt: '2023-06-02T18:37:25.149Z',
      _id: '647a36e501a3371dd3c04508',
    },
    {
      category: 'to-do',
      createdAt: '2023-06-02T18:37:25.149Z',
      date: '2023-06-27',
      end: '18:48',
      priority: 'high',
      start: '18:05',
      title: 'My task  relax 18:05-18:48',
      updatedAt: '2023-06-02T18:37:25.149Z',
      _id: '647a36e501a3371dd3c04507',
    },
    {
      category: 'to-do',
      createdAt: '2023-06-02T18:37:25.149Z',
      date: '2023-06-27',
      end: '18:48',
      priority: 'low',
      start: '18:05',
      title: 'My task  relax 18:05-18:48',
      updatedAt: '2023-06-02T18:37:25.149Z',
      _id: '647a36e501a3371dd3c045122',
    },
  ];

  const inProg = mainArray.filter(item => item.category === 'in-progress');
  const finish = mainArray.filter(item => item.category === 'done');

  return (
    <TaskContainer>
      <TasksColumn title={title[0]} taskData={mainArray} />
      <TasksColumn title={title[1]} taskData={inProg} />
      <TasksColumn title={title[2]} taskData={finish} />
    </TaskContainer>
  );
};
