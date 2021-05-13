import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header, Footer, Nav, LazyLoad, PopupLogin } from "./component";
import Course from "./page/course";
import CourseDetail from "./page/coursedetail";
import Email from "./page/email";
import Faq from "./page/faq";
import Home from "./page/home";
import Profile from "./page/profile";
import Project from "./page/project";
import Team from "./page/team";
import Cooperate from "./page/cooperate";
import RegisterCourse from "./page/register-course";
import Coins from "./page/coins";
import Pay from "./page/pay";
import Page404 from "./page/404";
import  "./index.css"

export let Context = React.createContext({})

function App() {
  let [state, setState]= useState({
    login: false
  })

  function handleLogin(username, password){
    if(username === 'admin@gmail.com' && password === "123456"){
      setState({
        ...state,
        login:{
          name: "Đỗ Cao Long",
          avatar: "/img/avatar-lg.png"
        }
      })
    }else{
      return 'Sai Email hoặc mật khẩu'
    }
  }
  function handleLogout(){
  
      setState({
        ...state,
        login: false
      })
   
  }

  return (
    <Context.Provider value={{ ...state, handleLogin, handleLogout }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Nav />
          <LazyLoad />
          <PopupLogin />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ca-nhan" component={Profile} />
            {/* cách 2 */}
            {/* <Route path="/ca-nhan" render={(prop) => <Profile {...prop}/>} /> */}
            {/* cách 3 */}
            {/* <Route path="/ca-nhan">
            <Profile/>
          </Route> */}
            <Route path="/gioi-thieu-coin" component={Coins} />
            <Route path="/team" component={Team} />
            <Route path="/hop-tac" component={Cooperate} />
            <Route path="/khoa-hoc" component={Course} />
            {/* Dynamic Router */}
            {/* <Route path="/khoa-hoc/:slug" component={CourseDetail} /> */}
            <Route path="/chi-tiet-khoa-hoc" component={CourseDetail} />
            <Route path="/email" component={Email} />
            <Route path="/faq" component={Faq} />
            <Route path="/thanh-toan" component={Pay} />
            <Route path="/du-an" component={Project} />
            <Route path="/dang-ki-khoa-hoc" component={RegisterCourse} />
            <Route component={Page404} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
