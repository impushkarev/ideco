import {IUser} from 'src/intefaces'

export const authUser = (user: IUser) => ({
  type: 'AUTH_USER',
  user
})
export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})