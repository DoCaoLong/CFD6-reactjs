import { LOGIN, LOGOUT } from "../Type";

export function LoginAciton(data){
    return {
        type: LOGIN,
        payload: data
    }
}
export function LogoutAciton(){
    return {
        type: LOGOUT,
        // payload: data
    }
}