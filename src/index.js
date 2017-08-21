import React from 'react'
import ReactDOM from 'react-dom'
import Presenter from 'microcosm/addons/presenter'
import Repo from './repo'
import App from './App'
import './index.css'

const repo = new Repo()

ReactDOM.render((
  <Presenter repo={repo}>
    <App />
  </Presenter>
), document.getElementById('root'))
