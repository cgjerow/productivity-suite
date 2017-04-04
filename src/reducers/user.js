var usr = 'Test'
if (localStorage.getItem('user')!==null){
  usr=localStorage.getItem('user')
}

const user = (state=usr, action) => {
  switch(action.type){
    case 'GET_USER':
      return action.userName

    default:
      return state
  }
}

export default user
