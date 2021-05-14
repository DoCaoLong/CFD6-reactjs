import { Redirect, Route } from "react-router-dom";
import { Context } from "../App";
import useAuth from "../assets/hook/useAuth";

export function PrivateRoute(prop){
    let {login} = useAuth(Context)

    if(!login){
        setTimeout(()=>{
            document.querySelector('.popup-login').style.display="flex"
        }, 0)
        return (
          <Route>
            <Redirect to="/" />
          </Route>
        );
    }

    return <Route {...prop}/>
}