import { AddTasksBth } from '../AddTasksBth/AddTasksBth';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeaderBar';
import { ColumnTasksList } from '../ColumnTasksList/ColumnTasksList';

import { TaskContainer, TaskItem } from '../TasksColumn/TasksColumnStyled';

export const TasksColumn = () => {
  //----Заглушка
  const title = ['To do', 'In progress', 'Done'];

  const inProgressData = [
    {
      category: 'in-progress',
      createdAt: '2023-06-02T18:37:25.149Z',
      date: '2023-06-27',
      end: '18:48',
      priority: 'medium',
      start: '18:05',
      title: 'My task  medium in-progress 18:05-18:48',
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
      _id: '647a36e501a3371dd3c04599',
    },
    {
      category: 'in-progress',
      createdAt: '2023-06-02T18:37:25.149Z',
      date: '2023-06-27',
      end: '18:48',
      priority: 'high',
      start: '18:05',
      title: 'My task  medium in-progress 18:05-18:48',
      updatedAt: '2023-06-02T18:37:25.149Z',
      _id: '647a36e501a3371dd3c04599',
    },
  ];

  const doneTasks = [
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
      category: 'done',
      createdAt: '2023-06-02T18:37:25.149Z',
      date: '2023-06-27',
      end: '18:48',
      priority: 'low',
      start: '18:05',
      title: 'My task  make a pie 18:05-18:48',
      updatedAt: '2023-06-02T18:37:25.149Z',
      _id: '647a36e501a3371dd3c04513',
    },
  ];
  const toDoTasks = [
    {
      category: 'to-do',
      createdAt: '2023-06-02T18:37:25.149Z',
      date: '2023-06-27',
      end: '18:48',
      priority: 'medium',
      start: '18:05',
      title: 'My task  medium in-progress 18:05-18:48',
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

  // const [toDo, setToDo] = useState([]);
  console.log('INPROGRES--->', inProgressData);
  console.log('DONETASK====>', doneTasks);
  console.log('TODOTASK---->', toDoTasks);

  return (
    <TaskContainer>
      <TaskItem>
        <ColumnHeadBar title={title[2]} />
        <ColumnTasksList
          toolbarData={['In progres', 'Done']}
          taskData={toDoTasks}
        />
        <AddTasksBth />
      </TaskItem>
      <TaskItem>
        <ColumnHeadBar title={title[1]} />
        <ColumnTasksList toolbarData={['Done', 'To do']} taskData={doneTasks} />
        <AddTasksBth />
      </TaskItem>
      <TaskItem>
        <ColumnHeadBar title={title[0]} />
        <ColumnTasksList
          toolbarData={['To do', 'In progress']}
          taskData={inProgressData}
        />
        <AddTasksBth />
      </TaskItem>
    </TaskContainer>
  );
};
