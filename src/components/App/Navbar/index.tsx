import React from 'react'
import { IUser } from 'src/intefaces'
import { connect } from 'react-redux'
import { authUser, logoutUser } from 'src/actions/user'
import './style.scss'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import AccountCircle from '@material-ui/icons/AccountCircle';



type NavBarProps = {
  user: IUser | null,
  authUser(user: IUser): void
  logoutUser(): void
}

const NavBar:React.FC<NavBarProps> = ({user, authUser, logoutUser}) => {
  const clickHandler = () => {
    if (user === null)
      authUser({id: 3, name: 'Пушкарев Максим'})
    else
      logoutUser()
  }

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" className={`title`}>
            Ideco
          </Typography>
          {
            <Button color="inherit" onClick={clickHandler}>
              { 
              user === null ? (
                  'Login'
                ) : (
                  <>
                    {user.name}
                    <AccountCircle className="avatar" />
                  </>
                )
              }
            </Button>
          }
        </Toolbar>
      </Container>
    </AppBar>
  )
}

const mapStateToProps = (state: any) => ({
  user: state.user
})
const mapDispatchToProps = (dispatch: any) => ({
  authUser: (user: IUser) => dispatch(authUser(user)),
  logoutUser: () => dispatch(logoutUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)