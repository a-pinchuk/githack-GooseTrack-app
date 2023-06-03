import { useState } from "react"
import { AddTasksBth } from "../AddTasksBth/AddTasksBth"
import { ColumnHeadBar } from "../ColumnHeadBar/ColumnHeaderBar"
import { ColumnTasksList } from "../ColumnTasksList/ColumnTasksList"

import { TaskContainer, TaskItem } from "../TasksColumn/TasksColumnStyled";

export const TasksColumn = () => {
	const [toDo, setToDo] = useState([]);
	const [inProgress, setProgress] = useState([]);
	const [done, setDone] = useState([]);


return(
	<TaskContainer>
		<TaskItem>
		<ColumnHeadBar title="To do"/>
		<ColumnTasksList/>
		<AddTasksBth/>
		</TaskItem>
		<TaskItem>
		<ColumnHeadBar title="In progress"/>
		<ColumnTasksList/>
		<AddTasksBth/>
		</TaskItem>
		<TaskItem>
		<ColumnHeadBar title="Done"/>
		<ColumnTasksList/>
		<AddTasksBth/>
		</TaskItem>
	</TaskContainer>
)
}