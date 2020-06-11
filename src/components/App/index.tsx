import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from 'src/reducers'
import './style.scss'

import NavBar from './Navbar'
import Main from './Main'

const store = createStore(rootReducer)



const App = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <Main />
    </Provider>
  );
}

export default App