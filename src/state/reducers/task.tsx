import { TTask } from 'types/task'
import { TUser } from 'types/user'

type action = {
  type: string,
  id: number,
  taskName: string,
  task: TTask,
  tasks: TTask[],
  filter: string,
  user: TUser
}

const task = (state: TTask[] = [], action: action) => {
  switch (action.type) {
    case 'INIT_TASK':
      return action.tasks
    case 'ADD_TASK':
      const ct:TTask = {
        id: state.length + 1,
        date: new Date(),
        title: action.taskName,
        user: action.user,
        isCompleted: false,
      }
      return [ ct, ...state ]
    case 'DELETE_TASK':
      return state.filter((task:TTask) => task.id !== action.id)
    case 'UPDATE_TASK':
      return state.map((task:TTask) => task.id === action.task.id ? action.task : task)
    case 'SORT_TASK':
      return state
    default:
      return state
  }
}

export default task