import React, {Component} from 'react'
import Flexbox from 'flexbox-react'
import { connect, dispatch } from 'react-redux'
import {changePage} from '../actions'

class Navbar extends Component {

  constructor(props){
    super(props)
    console.log(this.props.pageId)
  }

  renderView(pageId){
    if (pageId!=this.props.pageId){
      this.props.dispatch(changePage(pageId))
    }
  }

  renderIcon(id){
    let src = 'resources/'+id+'.png'

    if (id==='Settings'){
      if (id===this.props.pageId){
        return(
          <Flexbox id={id} width="55" height="55" style={styles.selectedSetting}
          onClick={()=> {this.renderView(id)}} justifyContent='center' alignItems='center'>
            <img style={styles.iconImage} width="45" height="45" src={src}/>
          </Flexbox>
        )
      }else{
        return(
          <Flexbox id={id} width="55" height="55" style={styles.otherSetting}
          onClick={()=> {this.renderView(id)}} justifyContent='center' alignItems='center'>
            <img style={styles.iconImage} width="45" height="45" src={src}/>
          </Flexbox>
        )
      }
    }
    else {
      if (id===this.props.pageId){
        return(
          <Flexbox id={id} width="55" height="55" style={styles.selectedIcon}
          onClick={()=> {this.renderView(id)}} justifyContent='center' alignItems='center'>
            <img style={styles.iconImage} width="45" height="45" src={src}/>
          </Flexbox>
        )
      }else{
        return(
          <Flexbox id={id} width="55" height="55" style={styles.otherIcon}
          onClick={()=> {this.renderView(id)}} justifyContent='center' alignItems='center'>
            <img style={styles.iconImage} width="45" height="45" src={src}/>
          </Flexbox>
        )
      }
    }
  }

  render(){
    return(
      <Flexbox flexDirection="column" alignItems="center"
      width="80" minHeight="100vh" style={styles.bar}>
        {this.renderIcon("Home")}
        {this.renderIcon("Notes")}
        {this.renderIcon("Tasks")}
        {this.renderIcon("Timer")}
        {this.renderIcon("Calendar")}
        {this.renderIcon("Reminders")}
        {this.renderIcon("Settings")}
      </Flexbox>
    )
  }
}


const mapStateToProps = (state) => {
  return { pageId: state.pageId}
}


export default connect(
  mapStateToProps
)(Navbar)




const styles = {
  bar : {
    backgroundColor: 'darkGray',
    position: 'fixed'
  },
  otherIcon: {
    borderStyle: 'solid',
    borderRadius: '8px',
    borderColor: 'darkGray',
    margin: 3
  },
  selectedIcon: {
    borderStyle: 'solid',
    borderRadius: '8px',
    borderColor: 'gray',
    margin: 3
  },
  otherSetting: {
    borderStyle: 'solid',
    borderRadius: '8px',
    borderColor: 'darkGray',
    margin: 3,
    marginTop: 'auto',
    marginBottom: 10
  },
  selectedSetting: {
    borderStyle: 'solid',
    borderRadius: '8px',
    borderColor: 'gray',
    margin: 3,
    marginTop: 'auto',
    marginBottom: 10
  },
  iconImage: {
  }
}
