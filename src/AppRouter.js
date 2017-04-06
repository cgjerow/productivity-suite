import React, { Component } from 'react'
import { Provider, connect, dispatch } from 'react-redux'
import { createStore } from 'redux'
import appReducer from './reducers'
import { Router, IndexRoute, Route, Redirect } from 'react-router'
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
    if (auth.loggedIn()){
      location.replace('/dashboard')
      return null
    }
    else {
      return <Login auth={auth}/>
    }
  }})

const app = React.createClass({
  render: function() {
    if (auth.loggedIn()) {
      return <App auth={auth}/>
    }
    else {
      location.replace('/login')
      return null
    }
}})

// validate authentication for private routes

class AppRouter extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={createBrowserHistory()}>
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/dashboard' component={app} />
            <Route path='/login' component={login}/>
          </div>
        </Router>
      </Provider>
    )
  }
}



export default AppRouter
