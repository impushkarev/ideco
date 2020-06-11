import React from 'react'
import './style.scss'

import Container from '@material-ui/core/Container'

import HomePage from 'src/components/Pages/HomePage'



const Main:React.FC = () => {
  return (
    <main>
      <Container>
        <HomePage />
      </Container>
    </main>
  )
}

export default Main