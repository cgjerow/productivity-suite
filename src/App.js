import React, {Component} from 'react'
import { dispatch, connect } from 'react-redux'
import { setAuth } from './actions/index'
import Flexbox from 'flexbox-react'
import Navbar from './components/navbar'
import Content from './components/content'

class App extends Component {
  render(){
    this.props.dispatch(setAuth(this.props.auth))
    return(
        <Flexbox flexDirection='row'>
          <Navbar/>
          <Content/>
        </Flexbox>
    )
  }
}

const mapStateToProps = (state) => {{}
}

export default connect(mapStateToProps)(App)
