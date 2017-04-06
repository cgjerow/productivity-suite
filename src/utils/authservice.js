import Auth0Lock from 'auth0-lock'
import { browserHistory } from 'react-router'

export default class AuthService {
  constructor(clientId, domain) {
    // Configure Auth0
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1")
      var url = 'http://localhost:3000/dashboard'
    else
      var url = 'https://productivity-suite.herokuapp.com/dashboard'
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: url,
        responseType: 'token'
      }
    })
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    // binds login functions to keep this context
    this.login = this.login.bind(this)
  }

  _doAuthentication(authResult) {
    // Saves the user token
    this.setToken(authResult.idToken)
    // navigate to the home route
    browserHistory.replace('/dashboard')
    //location.replace('/dashboard')
   }

  login() {
    // Call the show method to display the widget.
    this.lock.show()
  }

  getToken() {
      // Retrieves the user token from local storage
      return localStorage.getItem('id_token')
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    if (this.getToken()==null) {
      return false
    }
    else{
      return true
    }
  }

  setToken(idToken) {
    // Saves user token to local storage
    localStorage.setItem('id_token', idToken)
  }


  logout() {
    // Clear user token and profile data from local storage
    localStorage.removeItem('id_token');
    //browserHistory.replace('/')
    //location.replace('/')
  }
}
