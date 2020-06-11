import React from 'react'
import {ITask} from 'src/intefaces'
import { connect } from 'react-redux'
import { startEditingTask } from 'src/actions/task'

import TableCell from '@material-ui/core/TableCell'
import EditIcon from '@material-ui/icons/Edit';



type TaskTitleEditProps = {
  task: ITask,
  startEditingTask(id: number): void,
}

const TaskTitleEdit:React.FC<TaskTitleEditProps> = ({task, startEditingTask}) => {
  
  return (
    <>
      {
        !task.isEdit ? (
          <TableCell  align="left" className="icon_cell" onClick={() => startEditingTask(task.id)}>
            <EditIcon className="icon" />
          </TableCell>
        ) : ( null )
      }
    </>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  startEditingTask: (id: number) => dispatch(startEditingTask(id)),
})

export default connect(mapDispatchToProps)(TaskTitleEdit)