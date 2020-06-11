export interface ITask {
  id: number,
  completed: boolean,
  title: string,
  user: IUser,
  isEdit: boolean
}

export interface IUser {
  id: number,
  name: string,
  userName?: string
}