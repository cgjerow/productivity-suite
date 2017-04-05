import AuthService from '../utils/authservice'

var a = new AuthService('K0VloKxRbT9oNGRgiI162xna95ERSbUS', 'productivity-suite.auth0.com');
console.log(a)
const auth = (state=a, action) => {
  switch(action.type){
    case 'GET_AUTH': return action.auth
    default: return state
  }
}

export default auth
