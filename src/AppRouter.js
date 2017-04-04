import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import { browserHistory, Route, Redirect, Switch } from 'react-router'
import App from './App'
import AuthService from './utils/authservice'
//import Container from './Container'
import Login from './components/login'

const auth = new AuthService('K0VloKxRbT9oNGRgiI162xna95ERSbUS', 'productivity-suite.auth0.com');

// validate authentication for private routes
const requireAuth = () => {
  if (!auth.loggedIn())
    return login
  else
    return App
}

class AppRouter extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div>
          <Switch>
            <Redirect exact from='/' to='/home'/>
            <Route path='/home' component={requireAuth()}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

const login = () => {
  return (
  <Login auth={auth} />
)}

export default AppRouter
