import React from "react";
// import "../public/dest/style.min.css";
import { Header, Footer } from "./component";
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

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      {/* <Team/> */}
      <CourseDetail/>
      {/* <Email/> */}
      {/* <Faq/> */}
      {/* <Coins/> */}
      {/* <Cooperate/> */}
      {/* <Course/> */}
      {/* <Profile/> */}
      {/* <Project/> */}
      {/* <RegisterCourse/> */}
      {/* <Pay/> */}
      <Footer />
    </div>
  );
}

export default App;
