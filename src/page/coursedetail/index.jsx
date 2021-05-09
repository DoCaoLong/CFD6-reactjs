
import { useParams, useRouteMatch } from "react-router";
import BannerStyle2 from "./component/BannerStyle2";
import Course from "./component/Course";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";

export default function CourseDetail() {
  let {slug} = useParams()
  // console.log(slug); 

  let routerMatch = useRouteMatch()
  console.log(routerMatch);

   return (
     <main className="course-detail" id="main">
       <BannerStyle2 />
       <Section2 />
       <Section3 />
       <section className="section-4">
         <div className="container">
           <div className="textbox">
             <h3 className="sub-title">Khóa học</h3>
             <h2 className="main-title">Liên quan</h2>
           </div>
           <div className="list row">
             <Course
               img="img/img.png"
               des="One of the best corporate fashion brands in Sydney"
               namecourse="Reacjs/Redux"
               name="Trần Nghĩa"
             />
             <Course
               img="img/img2.png"
               des="One of the best corporate fashion brands in Sydney"
               namecourse="Front-end nâng cao"
               name="Vương Đặng"
             />
             <Course
               img="img/img3.png"
               des="One of the best corporate fashion brands in Sydney"
               namecourse="Laravel framework"
               name="Trần Nghĩa"
             />
           </div>
         </div>
       </section>
     </main>
   );
}