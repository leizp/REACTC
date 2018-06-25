import React from 'react'
import { hot } from 'react-hot-loader'
import Hello from 'components/Hello'
import { renderRoutes } from 'react-router-config'
import { HashRouter as Router } from 'react-router-dom'
import routes from 'routes'
import logo from './assets/logo.svg'
import './App.css'

import { Provider } from 'react-redux'
import store from '$redux/store'
import Counter from 'components/Counter'

const App = () => (
  <div className='App'>
    <div className='App-header'>
      <img src={logo} className='App-logo shake-rotate' alt='logo' />
    </div>
    <Counter />
    <Hello msg='Hello World' />
    <Router>
      {renderRoutes(routes)}
    </Router>
  </div>
)

const reduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default hot(module)(reduxApp)
