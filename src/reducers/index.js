import { combineReducers } from 'redux'
import pageId from './page'
import auth from './auth'

const appReducer = combineReducers({
  pageId,
  auth
})

export default appReducer
