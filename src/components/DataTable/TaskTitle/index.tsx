import React, {useState} from 'react'
import {ITask} from 'src/intefaces'
import { connect } from 'react-redux'
import { updateTask } from 'src/actions/task'

import TableCell from '@material-ui/core/TableCell'
import TextField from '@material-ui/core/TextField'



type TaskTitleProps = {
  task: ITask,
  updateTask(id: number, title: string): void
}

const TaskTitle:React.FC<TaskTitleProps> = ({task, updateTask}) => {
  const [title, setTitle] = useState<string>(task.title)

  const keyboardHandler = (key: number) => {
    if (key === 13)
      updateTask(task.id, title)
  }
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <TableCell  colSpan={task.isEdit ? 2 : 1} align="left" className={task.completed && !task.isEdit ? 'completed' : ''}>
      {
        task.isEdit ? (
          <TextField className="input" required autoFocus id="standard-required" defaultValue={task.title} onChange={changeHandler} onKeyPress={(e) => keyboardHandler(e.which)} />
        ) : (
          task.title
        )
      }
    </TableCell>
  )
}

const mapStateToProps = (state: any) => ({
  
})

const mapDispatchToProps = (dispatch: any) => ({
  updateTask: (id: number, title: string) => dispatch(updateTask(id, title))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskTitle)