const CHANGE_PAGE = 'CHANGE_PAGE'
const SET_AUTH = 'SET_AUTH'
let initialPage = 'Home'

export const changePage = (pageId=initialPage) => {
  return {
    type: CHANGE_PAGE,
    pageId: pageId
  }
}

export const setAuth = (auth) => {
  return {
    type: SET_AUTH,
    auth: auth
  }
}
