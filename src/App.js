import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PrivateRoute} from "./component";
import Course from "./page/course";
import CourseDetail from "./page/coursedetail";
import Email from "./page/email";
import Faq from "./page/faq";
import Home from "./page/home";
import Profile from "./page/profile";
import Project from "./page/project";
import Team from "./page/team";
import RegisterCourse from "./page/register-course";
import Coins from "./page/coins";
import Pay from "./page/pay";
import Page404 from "./page/404";
import AuthApi from "./service/AuthApi";
import Contact from "./page/contact";
import MainLayout from "./layout/MainLayout";
import store from './redux'
import Demo from "./demo";

export let Context = React.createContext({});

function App() {

  // AuthApi.update({
  //   name: "Khủng Long Xanh"
  // }).then(res => {
  // })

  let [state, setState] = useState({
    login: JSON.parse(localStorage.getItem("login")) 
  });

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(state.login))
  }, [state.login]) 

  async function handleLogin(username, password) {
    try{
      let res = await AuthApi.login({ username, password });
      // convert to json
      if (res.data) {
        setState({
          ...state,
          login: res.data,
        });
        return {
          success: true,
        };
      } else if (res.error) {
        // trả về báo lỗi từ back end
        return {
          error: res.error,
        };
      }
    }catch(err){

    }
  }

  function handleLogout() {
    setState({
      ...state,
      login: false,
    });
  }

  return (
    <Provider store={store}>
      <Context.Provider value={{ ...state, handleLogin, handleLogout }}>
        <BrowserRouter>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute path="/ca-nhan" component={Profile} />{" "}
              {/* cách 2 */}
              {/* <Route path="/ca-nhan" render={(prop) => <Profile {...prop}/>} /> */}
              {/* cách 3 */}
              {/* <Route path="/ca-nhan">
                        <Profile/>
                      </Route> */}
              <Route path="/gioi-thieu-coin" component={Coins} />
              <Route path="/demo" component={Demo} />
              <Route path="/team" component={Team} />
              <Route path="/hop-tac" component={Contact} />
              <Route path="/khoa-hoc/" exact={true} component={Course} />
              {/* <Route path="/khoa-hoc/" component={Course} />  */}
              {/* Dynamic Router */}
              {/* <Route path="/khoa-hoc/:slug" component={CourseDetail} /> */}
              <Route path="/chi-tiet-khoa-hoc/:slug" component={CourseDetail} />
              <Route path="/email" component={Email} />
              <Route path="/faq" component={Faq} />
              <Route path="/thanh-toan" component={Pay} />
              <Route path="/du-an" component={Project} />
              <Route path="/dang-ki-khoa-hoc" component={RegisterCourse} />
              <Route component={Page404} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </Context.Provider>
    </Provider>
  );
}

export default App;
