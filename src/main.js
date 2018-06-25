import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'lib-flexible/flexible.js'

const FastClick = require('fastclick')
FastClick.attach(document.body) // 解决点击延迟问题

require('es6-promise').polyfill()

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
