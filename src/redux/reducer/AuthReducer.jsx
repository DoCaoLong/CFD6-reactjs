import {LOGIN, LOGOUT} from '../Type'

let initState = {
  login: JSON.parse(localStorage.getItem("login"))
}
export default function AuthReducer(state = initState, action){
    if(action.type === LOGIN){
        localStorage.setItem('login', JSON.stringify(action.payload))
        return {
          ...state,
          login: action.payload
        }
    }else if (action.type === LOGOUT) {
        localStorage.setItem("login", false)
        return{
            ...state,
            login: false
        }
    }
    // console.log(action);
   return state
}