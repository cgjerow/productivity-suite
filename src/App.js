import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appReducer from './reducers'
import Flexbox from 'flexbox-react'
import Navbar from './components/navbar'
import Content from './components/content'

let store = createStore(appReducer)
console.log(store.getState().pageId)
class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <Flexbox flexDirection='row'>
          <Navbar/>
          <Content/>
        </Flexbox>
      </Provider>
    )
  }
}
export default App
