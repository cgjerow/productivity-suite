import React, {Component} from 'react'
import { Redirect } from 'react-router'
import { Button } from 'react-bootstrap'


class Home extends Component{
  toLogin = () => {
    history.pushState(null,null,'/')
    location.replace('/login')
  }

  render() {
    return(
    <div>Sup Nerd
    <Button onClick={this.toLogin}>Login</Button>
    </div>
  )}
}

export default Home

const styles = {
  home: {
  }
}
