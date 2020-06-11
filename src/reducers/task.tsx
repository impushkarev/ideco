import {ITask} from 'src/intefaces'

const tasks = (state: ITask[] = [], action: any) => {
  switch (action.type) {
    case 'INIT_TASKS':
      return action.tasks
    case 'ADD_TASK':
      const newTask: ITask = {
        id: state.length + 1,
        completed: false,
        title: action.task,
        isEdit: false,
        user: action.user
      }
      return [ newTask, ...state ]
    case 'DELETE_TASK':
      if(window.confirm('Вы уверены, что хотите удалить данную задачу?')) {
        return state.filter((task: ITask) => task.id !== action.task)
      }
    case 'UPDATE_TASK':
      return state.map((task: ITask) => {
        return task.id === action.task ? {...task, title: action.value, isEdit: !task.isEdit} : task 
      })
    case 'UPDATE_STATUS_TASK':
      return state.map((task) => {
        return task.id === action.task ? {...task, completed: !task.completed} : task
      })
    case 'START_EDITING_TASK':
      return state.map((task) => {
        return task.id === action.task ? {...task, isEdit: !task.isEdit} : task
      })
    default:
      return state
  }
}

export default tasks