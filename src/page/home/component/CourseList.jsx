import { CourseItem } from "../../../component";
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
              img="img/img1.png"
              //   status="da-ket-thuc"
              teacher_avatar="img/avt.png"
              teacher_name="Trần Nghĩa"
            />
            <CourseItem
              name="Web Responsive"
              des="Khóa học thực chiến dự án gồm Photoshop, HTML, CSS, CSS3, SCSS, Responsive với Media Query, Bootstrap 4, Grunt, Javascript, jQuery."
              img="img/img1.png"
              status="da-ket-thuc"
              teacher_avatar="img/avt.png"
              teacher_name="Trần Nghĩa"
            />
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
              img="img/img1.png"
              //   status="da-ket-thuc"
              teacher_avatar="img/avt.png"
              teacher_name="Trần Nghĩa"
            />
            <CourseItem
              name="Web Responsive"
              des="Khóa học thực chiến dự án gồm Photoshop, HTML, CSS, CSS3, SCSS, Responsive với Media Query, Bootstrap 4, Grunt, Javascript, jQuery."
              img="img/img1.png"
              status="da-ket-thuc"
              teacher_avatar="img/avt.png"
              teacher_name="Trần Nghĩa"
            />
          </div>
        </div>
      </section>
      <section className="section-courseonline section-blue">
        <div className="container">
          <div className="textbox">
            <h2 className="main-title">Khóa học Online</h2>
          </div>
          <div className="list row">
            <div className="col-md-4 course gray">
              <div className="wrap">
                <a className="cover" href="#">
                  <img src="img/img1.png" alt="" />
                  <div className="hover">
                    <div className="top">
                      <div className="user">
                        <img src="img/icon-user-white.svg" alt="" />
                        12
                      </div>
                      <div className="heart">
                        <img src="img/icon-heart.svg" alt="" /> 100
                      </div>
                    </div>
                    <div className="share">
                      <img src="img/icon-viewmore.svg" alt="" />
                    </div>
                  </div>
                </a>
                <div className="info">
                  <a href="#" className="name">
                    Front-end căn bản
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="img/avt.png" alt="" />
                    </div>
                    <div className="name">Trần Nghĩa</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 course gray">
              <div className="wrap">
                <a className="cover" href="#">
                  <img src="img/img1.png" alt="" />
                  <div className="hover">
                    <div className="top">
                      <div className="user">
                        <img src="img/icon-user-white.svg" alt="" />
                        12
                      </div>
                      <div className="heart">
                        <img src="img/icon-heart.svg" alt="" /> 100
                      </div>
                    </div>
                    <div className="share">
                      <img src="img/icon-viewmore.svg" alt="" />
                    </div>
                  </div>
                </a>
                <div className="info">
                  <a href="#" className="name">
                    Front-end nâng cao
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="img/avt.png" alt="" />
                    </div>
                    <div className="name">Trần Nghĩa</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 course gray">
              <div className="wrap">
                <a className="cover" href="#">
                  <img src="img/img1.png" alt="" />
                  <div className="hover">
                    <div className="top">
                      <div className="user">
                        <img src="img/icon-user-white.svg" alt="" />
                        12
                      </div>
                      <div className="heart">
                        <img src="img/icon-heart.svg" alt="" /> 100
                      </div>
                    </div>
                    <div className="share">
                      <img src="img/icon-viewmore.svg" alt="" />
                    </div>
                  </div>
                </a>
                <div className="info">
                  <a href="#" className="name">
                    Laravel framework
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="img/avt.png" alt="" />
                    </div>
                    <div className="name">Trần Nghĩa</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-deco">C</div>
        </div>
      </section>
    </>
  );
}
