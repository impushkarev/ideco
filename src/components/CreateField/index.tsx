import React, {useState} from 'react'
import { IUser } from 'src/intefaces'
import { connect } from 'react-redux'
import { addTask } from 'src/actions/task'
import './style.scss'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



type CreateFieldProps = {
  user: IUser,
  addTask(task: string, user: IUser): void
}

const CreateField:React.FC<CreateFieldProps> = ({ user, addTask }) => {
  const [task, setTask] = useState<string>('')

  const changeHandler = (string: string) => setTask(string)
  const keyboardHandler = (key: number) => {
    if (key === 13)
      cleanInput()
  }
  const cleanInput = () => {
    addTask(task, user)
    setTask('')    
  }

  return (
    <>
    {
      user !== null ? (
        <div className="addField">
          <Grid container spacing={1}>
            <Grid container item xs={10}>
              <TextField id="standard-basic" label="Задача" className="create" value={task} fullWidth onChange={(e) => changeHandler(e.target.value)} onKeyPress={(e) => keyboardHandler(e.which)}/>
            </Grid>
            <Grid container item xs={2}>
              <Button variant="contained" color="primary" size="small" onClick={cleanInput} fullWidth>
                Добавить
              </Button>
            </Grid>
          </Grid>
        </div>
      ) : ( null )
    }
    </>
  )
}

const mapStateToProps = (state: any) => ({
  user: state.user
})
const mapDispatchToProps = (dispatch: any) => ({
  addTask: (task: string, user: IUser) => dispatch(addTask(task, user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateField)