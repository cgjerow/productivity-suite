import React, {Component} from 'react'
import { connect, dispatch } from 'react-redux'
import { browserHistory } from 'react-router'
import Flexbox from 'flexbox-react'
import AuthService from '../utils/authservice'
import { Button } from 'react-bootstrap'


class Home extends Component{
  logout = () => {
      this.props.auth.logout();
      location.reload();
  }

  render(){
    console.log(this.props)
    return(
    <Flexbox style={styles.home} justifyContent='center' height='100%' width='100%'>
      Create New Project
      <Button onClick={this.logout}>Logout</Button>
    </Flexbox>
  )}
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

export default connect(mapStateToProps)(Home)

const styles = {
  home: {
  }
}
