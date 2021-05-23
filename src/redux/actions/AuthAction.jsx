import { LOGIN, LOGOUT, ERROR } from "../Type";
import AuthApi from "../../service/AuthApi";

export function LoginAciton(data, success){
    return async (dispatch) => {
        let res = await AuthApi.login(data) 
        if(res.data){
            dispatch({
                type: LOGIN,
                payload: res.data
            })
            success();
        }else if(res.error){
             dispatch({
               type: ERROR,
               payload: res.error,
             });
        }
    }
}
export function LogoutAciton(){
    return {
        type: LOGOUT,
        // payload: data
    }
}