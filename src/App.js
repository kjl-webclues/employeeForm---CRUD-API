import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashbord from '../src/Dashbord'
import EmpForm from './EmpForm'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/"><EmpForm /></Route>
        <Route path="/dashbord"><Dashbord /></Route>
      </Switch>
    </>
  )
}

export default App
