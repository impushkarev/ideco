import {IUser} from 'src/intefaces'

const user = (state: IUser | null = null, action: any) => {
  switch (action.type) {
    case 'AUTH_USER':
      return action.user
    case 'LOGOUT_USER':
      return null
    default:
      return state
  }
}

export default user