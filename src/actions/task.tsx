import {ITask, IUser} from 'src/intefaces'

export const initTasks = (tasks: ITask[]) => ({
  type: 'INIT_TASKS',
  tasks
})
export const addTask = (task: string, user: IUser) => ({
  type: 'ADD_TASK',
  task,
  user
})
export const deleteTask = (task: number) => ({
  type: 'DELETE_TASK',
  task,
})
export const updateTask = (task: number, value: string) => ({
  type: 'UPDATE_TASK',
  task,
  value: value
})
export const updateStatusTask = (task: number) => ({
  type: 'UPDATE_STATUS_TASK',
  task
})
export const startEditingTask = (task: number) => ({
  type: 'START_EDITING_TASK',
  task
})
export const getTasks = () => ({
  type: 'DEFAULT'
})