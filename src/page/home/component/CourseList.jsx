import { CourseItem } from "../../../component";
import { CourseListOnl } from "../../../component";

export default function CourseList() {
  return (
    <>
      <section className="section-courseoffline">
        <div className="container">
          <p className="top-des">
            The readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>
          <div className="textbox">
            <h2 className="main-title">Khóa học Offline</h2>
          </div>
          <div className="list row">
            <CourseItem
              name="Web Responsive"
              des="Khóa học thực chiến dự án gồm Photoshop, HTML, CSS, CSS3, SCSS, Responsive với Media Query, Bootstrap 4, Grunt, Javascript, jQuery."
              img="img/img1.png"
              status="dang-dien-ra"
              teacher_avatar="img/avt.png"
              teacher_name="Trần Nghĩa"
            />
            <CourseItem
              name="Web Responsive"
              des="Khóa học thực chiến dự án gồm Photoshop, HTML, CSS, CSS3, SCSS, Responsive với Media Query, Bootstrap 4, Grunt, Javascript, jQuery."
              img="img/img2.png"
              //   status="da-ket-thuc"
              teacher_avatar="img/avt.png"
              teacher_name="Trần Nghĩa"
            />
            <CourseItem
              name="Web Responsive"
              des="Khóa học thực chiến dự án gồm Photoshop, HTML, CSS, CSS3, SCSS, Responsive với Media Query, Bootstrap 4, Grunt, Javascript, jQuery."
              img="img/img3.png"
              status="da-ket-thuc"
              teacher_avatar="img/avt.png"
              teacher_name="Trần Nghĩa"
            />
            <CourseItem
              name="Web Responsive"
              des="Khóa học thực chiến dự án gồm Photoshop, HTML, CSS, CSS3, SCSS, Responsive với Media Query, Bootstrap 4, Grunt, Javascript, jQuery."
              img="img/img4.png"
              status="dang-dien-ra"
              teacher_avatar="img/avt.png"
              teacher_name="Trần Nghĩa"
            />
            <CourseItem
              name="Web Responsive"
              des="Khóa học thực chiến dự án gồm Photoshop, HTML, CSS, CSS3, SCSS, Responsive với Media Query, Bootstrap 4, Grunt, Javascript, jQuery."
              img="img/img5.png"
              //   status="da-ket-thuc"
              teacher_avatar="img/avt.png"
              teacher_name="Trần Nghĩa"
            />
            <CourseItem
              name="Web Responsive"
              des="Khóa học thực chiến dự án gồm Photoshop, HTML, CSS, CSS3, SCSS, Responsive với Media Query, Bootstrap 4, Grunt, Javascript, jQuery."
              img="img/img6.png"
              status="da-ket-thuc"
              teacher_avatar="img/avt.png"
              teacher_name="Trần Nghĩa"
            />
          </div>
        </div>
      </section>
      <section className="section-courseonline section-blue">
        <div className="container" >
          <div className="textbox" style={{color: "black"}}>
            <h2 className="main-title">Khóa học Online</h2>
          </div>
          <div className="list row">
            <CourseListOnl
              img="img/img1.png"
              des=" One of the best corporate fashion brands in Sydney"
              nameCourse="Front end"
              nameTeacher="Nghĩa Trần"
            />
            <CourseListOnl
              img="img/img2.png"
              des=" One of the best corporate fashion brands in Sydney"
              nameCourse="Front end nâng cao"
              nameTeacher="Nghĩa Trần"
            />
            <CourseListOnl
              img="img/img3.png"
              des=" One of the best corporate fashion brands in Sydney"
              nameCourse="Laravel framework"
              nameTeacher="Nghĩa Trần"
            />
          </div>
          <div className="text-deco">C</div>
        </div>
      </section>
    </>
  );
}
