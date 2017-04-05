import React, {Component} from 'react'
import { Redirect } from 'react-router'
import { Button } from 'react-bootstrap'


class Home extends Component{
  toLogin = () => {
    location.replace('/#/login')
  }

  render() {
    return(
    <div>HELLLOOO
    <Button onClick={this.toLogin}>Login</Button>
    </div>
  )}
}

export default Home

const styles = {
  home: {
  }
}
