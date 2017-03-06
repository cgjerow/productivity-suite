import React, {Component} from 'react'
import Flexbox from 'flexbox-react'
import { connect } from 'react-redux'
import Home from './home'

const components = {
  Home : <Home/>
}

class Content extends Component{

  constructor(props){
    super(props)
    console.log(this.props.pageId)
  }

  render(){
    let Page=this.props.pageId
    return(
      <Flexbox height='100%' width='100%'>{components[Page]}</Flexbox>
  )}
}


const mapStateToProps = (state) => {
  return { pageId: state.pageId }
}

export default connect(mapStateToProps)(Content)
