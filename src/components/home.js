import React, {Component} from 'react'
import { connect, dispatch } from 'react-redux'
import Flexbox from 'flexbox-react'

class Home extends Component{

  render(){return(
    <Flexbox style={styles.home} justifyContent='center' height='100%' width='100%'>
      Create New Project
    </Flexbox>
  )}
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(Home)

const styles = {
  home: {
  }
}
