import { TaskHeaderBox, TaskHeaderBth, TaskHeaderTitle } from "./ColumnHeadBarStyled"

export const ColumnHeadBar = ({title}) => {
	return(
		<TaskHeaderBox>
			<TaskHeaderTitle>{title}</TaskHeaderTitle>
			<TaskHeaderBth>+</TaskHeaderBth>
		</TaskHeaderBox>
	)
}