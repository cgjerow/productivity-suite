import React, {Component} from 'react'
import Link from 'react-router'
import Home from '../components/home'

class Template extends Component {
  render(){
    console.log('props')
    console.log(this.props)
    return(
        <div>
          Test
          {this.props.children}
        </div>
    )
  }
}

export default Template
