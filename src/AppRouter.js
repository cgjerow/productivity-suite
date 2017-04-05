import React, { Component } from 'react'
import { Provider, connect, dispatch } from 'react-redux'
import { createStore } from 'redux'
import appReducer from './reducers'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import { browserHistory, Route, Redirect, Switch } from 'react-router'
import App from './App'
import AuthService from './utils/authservice'
//import Container from './Container'
import Login from './components/login'
import Home from './components/public/home'

let store = createStore(appReducer)
const auth = new AuthService('K0VloKxRbT9oNGRgiI162xna95ERSbUS', 'productivity-suite.auth0.com');

// validate authentication for private routes
const requireAuth = () => {
  if (auth.loggedIn()) {
    return app
  } else {
    if(location.pathname!='/login')
      location.replace('/login')
    return null
  }
}


class AppRouter extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <div>
            <Route exact path='/' component={Home}/>
                <Route path='/dashboard' component={requireAuth()}/>
                <Route path='/login' component={login} />
          </div>
        </Router>
      </Provider>
    )
  }
}

const login = () => {
  return (
  <Login auth={auth}/>
)}

const app = () => {
  return(
    <App auth={auth}/>
)}

export default AppRouter
