const CHANGE_PAGE = 'CHANGE_PAGE'
let initialValue = 'Home'

export const changePage = (pageId=initialValue) => {
  return {
    type: CHANGE_PAGE,
    pageId: pageId
  }
}
