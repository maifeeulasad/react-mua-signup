import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import Signup from 'react-mua-signup'
import 'react-mua-signup/dist/index.css'


ReactDOM.render(<Signup onSignup={(email, p) => {
  console.debug(email)
  console.debug(p)
}}/>, document.getElementById('root'))
