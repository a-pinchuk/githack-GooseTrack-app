import {
  AvatorTaskList,
  TaskListItem,
  TaskStatue,
  TaskText,
} from './TaskColumnCardStyled';
import { TasklToolBar } from '../TaskToolBar/TaskToolBar';

export const TaskColumnCard = ({ toolbarData, item }) => {
  return (
    <TaskListItem>
      <TaskText>{item.title}</TaskText>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}
      >
        <AvatorTaskList
          src="https://n1s2.hsmedia.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0xac120003_4430520541578509619.jpg"
          alt="avator"
          width="28"
          height="28"
        />
        <TaskStatue priority={item.priority}>{item.priority}</TaskStatue>
        <TasklToolBar toolbarData={toolbarData} idData={item._id} />
      </div>
    </TaskListItem>
  );
};
