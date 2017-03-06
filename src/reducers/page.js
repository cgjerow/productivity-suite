const pageId = (state='Home', action) => {
  switch(action.type){
    case 'CHANGE_PAGE': return action.pageId
    default: return state
  }
}

export default pageId
