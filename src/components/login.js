import React, { PropTypes as T } from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import AuthService from '../utils/authservice'
//import styles from './styles.module.css'

export class Login extends React.Component {
  constructor(props){
    super(props)
  }


  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    this.props.auth.lock.show()
  }
}

export default Login;
