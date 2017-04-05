import React, { Component } from 'react'
import { Provider, connect, dispatch } from 'react-redux'
import { createStore } from 'redux'
import appReducer from './reducers'
import { Router, IndexRoute, Route } from 'react-router'
import { HashRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import App from './App'
import AuthService from './utils/authservice'

import Login from './components/login'
import Home from './components/public/home'
import Template from './pages/template'



let store = createStore(appReducer)
const auth = new AuthService('K0VloKxRbT9oNGRgiI162xna95ERSbUS', 'productivity-suite.auth0.com');

const login = React.createClass({
  render: function() {
  return (
  <Login auth={auth}/>
)}})

const app = React.createClass({
  render: function() {
  return (
  <App auth={auth}/>
)}})

// validate authentication for private routes
const requireAuth = () => {
  if (auth.loggedIn()) {
    return app
  } else {
    if(location.pathname=='/dashboard')
      location.replace('/login')
    return null
  }
}

class AppRouter extends Component {

  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/dashboard' component={requireAuth()}/>
            <Route path='/login' component={login} />
            </div>
        </HashRouter>
      </Provider>
    )
  }
}



export default AppRouter
