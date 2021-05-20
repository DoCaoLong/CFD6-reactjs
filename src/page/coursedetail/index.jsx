
import { useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router";
import BannerStyle2 from "./component/BannerStyle2";
import Course from "./component/Course";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import CourseApi from "../../service/CourseApi";

export default function CourseDetail() {
  let {slug} = useParams()
  console.log(slug); 

  let routerMatch = useRouteMatch()

  const [course, setCourse] = useState();

  useEffect(async() => {
    let res = await CourseApi.courseDetail(slug);
    setCourse(res.data);
  },[slug]);

  console.log(course);

   return (
     <main className="course-detail" id="main">
       <BannerStyle2
         title={course?.title}
         date={course?.opening_time}
         time={course?.count_video}
       />
       <Section2 />
       <Section3
         img={course?.thumbnail.link}
         des={course?.short_description}
         namecourse={course?.title}
         name={course?.teacher.title}
       />
       <section className="section-4">
         <div className="container">
           <div className="textbox">
             <h3 className="sub-title">Khóa học</h3>
             <h2 className="main-title">Liên quan</h2>
           </div>
           <div className="list row">
             <Course
               img={course?.thumbnail.link}
               des={course?.short_description}
               namecourse={course?.title}
               name={course?.teacher.title}
             />
             <Course
               img={course?.thumbnail.link}
               des={course?.short_description}
               namecourse={course?.title}
               name={course?.teacher.title}
             />
             <Course
               img={course?.thumbnail.link}
               des={course?.short_description}
               namecourse={course?.title}
               name={course?.teacher.title}
             />
           </div>
         </div>
       </section>
     </main>
   );
}