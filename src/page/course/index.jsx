import { CourseItem } from "../../component"

export default function Course(){
    return (
      <main className="homepage" id="main">
        <section className="section-1">
          <div className="container">
            <h2 className="main-title">KHÓA HỌC CFD</h2>
            <p className="top-des">
              The readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
            </p>
            <div className="textbox">
              <h3 className="sub-title">KHÓA HỌC</h3>
              <h2 className="main-title">ONLINE</h2>
            </div>
            <div className="list row">
              <CourseItem
                name="Web Responsive"
                des="Khóa học thực chiến dự án gồm Photoshop, HTML, CSS, CSS3, SCSS, Responsive với Media Query, Bootstrap 4, Grunt, Javascript, jQuery."
                img="/img/img1.png"
                status="dang-dien-ra"
                teacher_avatar="/img/avt.png"
                teacher_name="Trần Nghĩa"
              />
              <CourseItem
                name="Web Responsive"
                des="Khóa học thực chiến dự án gồm Photoshop, HTML, CSS, CSS3, SCSS, Responsive với Media Query, Bootstrap 4, Grunt, Javascript, jQuery."
                img="/img/img.png"
                status="dang-dien-ra"
                teacher_avatar="/img/avt.png"
                teacher_name="Trần Nghĩa"
              />
              <CourseItem
                name="Web Responsive"
                des="Khóa học thực chiến dự án gồm Photoshop, HTML, CSS, CSS3, SCSS, Responsive với Media Query, Bootstrap 4, Grunt, Javascript, jQuery."
                img="/img/img2.png"
                status="dang-dien-ra"
                teacher_avatar="/img/avt.png"
                teacher_name="Trần Nghĩa"
              />
              <CourseItem
                name="Web Responsive"
                des="Khóa học thực chiến dự án gồm Photoshop, HTML, CSS, CSS3, SCSS, Responsive với Media Query, Bootstrap 4, Grunt, Javascript, jQuery."
                img="/img/img3.png"
                status="dang-dien-ra"
                teacher_avatar="/img/avt.png"
                teacher_name="Trần Nghĩa"
              />
              <CourseItem
                name="Web Responsive"
                des="Khóa học thực chiến dự án gồm Photoshop, HTML, CSS, CSS3, SCSS, Responsive với Media Query, Bootstrap 4, Grunt, Javascript, jQuery."
                img="/img/img4.png"
                status="dang-dien-ra"
                teacher_avatar="/img/avt.png"
                teacher_name="Trần Nghĩa"
              />
              <CourseItem
                name="Web Responsive"
                des="Khóa học thực chiến dự án gồm Photoshop, HTML, CSS, CSS3, SCSS, Responsive với Media Query, Bootstrap 4, Grunt, Javascript, jQuery."
                img="/img/img5.png"
                status="dang-dien-ra"
                teacher_avatar="/img/avt.png"
                teacher_name="Trần Nghĩa"
              />
            </div>
          </div>
        </section>
        <section className="section-2 section-blue">
          <div className="container">
            <div className="textbox white">
              <h3 className="sub-title">KHÓA HỌC</h3>
              <h2 className="main-title">OFFLINE</h2>
            </div>
            <div className="list row">
              <CourseItem
                name="Web Responsive"
                des="Khóa học thực chiến dự án gồm Photoshop, HTML, CSS, CSS3, SCSS, Responsive với Media Query, Bootstrap 4, Grunt, Javascript, jQuery."
                img="/img/img1.png"
                status="dang-dien-ra"
                teacher_avatar="/img/avt.png"
                teacher_name="Trần Nghĩa"
              />
              <CourseItem
                name="Web Responsive"
                des="Khóa học thực chiến dự án gồm Photoshop, HTML, CSS, CSS3, SCSS, Responsive với Media Query, Bootstrap 4, Grunt, Javascript, jQuery."
                img="/img/img2.png"
                status="dang-dien-ra"
                teacher_avatar="/img/avt.png"
                teacher_name="Trần Nghĩa"
              />
              <CourseItem
                name="Web Responsive"
                des="Khóa học thực chiến dự án gồm Photoshop, HTML, CSS, CSS3, SCSS, Responsive với Media Query, Bootstrap 4, Grunt, Javascript, jQuery."
                img="/img/img3.png"
                status="dang-dien-ra"
                teacher_avatar="/img/avt.png"
                teacher_name="Trần Nghĩa"
              />
            </div>
            <div className="text-deco">C</div>
          </div>
        </section>
      </main>
    );
}