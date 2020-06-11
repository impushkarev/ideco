import React, {useEffect} from 'react'
import {ITask} from 'src/intefaces'
import { connect } from 'react-redux'
import { initTasks, deleteTask, updateStatusTask } from 'src/actions/task'
import './style.scss'

import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
import DeleteIcon from '@material-ui/icons/Delete';

import TaskTitle from './TaskTitle'
import TaskTitleEdit from './TaskTitleEdit'



type DataTableProps = {
  dispatch: any,
  tasks: ITask[]
}

const DataTable:React.FC<DataTableProps> = ({tasks, dispatch}) => {

  useEffect(() => {
    getTasks()
  }, [])
  const getTasks = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(json => json.splice(0, 10))
    
    for (const task of data) {
      const user = await getUser(task.userId)
      delete task.userId
      task.isEdit = false
      task.user = user
    }

    dispatch(initTasks(data))
  }
  const getUser = async (task: number) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${task}`)
    .then(res => res.json())
    .then(json => {
      delete json.address
      delete json.company
      delete json.email
      delete json.phone
      delete json.website

      return json
    })

    return data
  }

  return (
    <TableContainer component={Paper}>
      <Table className={`table`} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell size="small" align="center"></TableCell>
            <TableCell align="left">Исполнитель</TableCell>
            <TableCell align="left">Задача</TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task: ITask) =>
            <TableRow key={task.id} className="row">
              <TableCell size="small" align="center" className="circle_cell" onClick={() => dispatch(updateStatusTask(task.id))}>
                <div  className={`circle ${task.completed ? 'completed' : ''}`}>
                </div>
              </TableCell>
              <TableCell>{task.user.name}</TableCell>
              <TaskTitle task={task} />
              <TaskTitleEdit task={task} />
              <TableCell className="icon_cell" onClick={() => dispatch(deleteTask(task.id))}>
                <DeleteIcon className="icon delete" />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const mapStateToProps = (state: any) => ({
  tasks: state.tasks
})

export default connect(
  mapStateToProps
)(DataTable)