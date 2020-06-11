import { combineReducers } from 'redux'
import tasks from './task'
import user from './user'

export default combineReducers({
  tasks,
  user
})
