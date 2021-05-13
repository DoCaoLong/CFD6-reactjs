import {Link} from 'react-router-dom'
export function CourseListOnl({img, nameCourse, des, nameTeacher, }){
    return (
      <div className="col-md-4 course gray">
        <div className="wrap">
          <a className="cover" href="#">
            <img src={img} alt="" />
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
              {nameCourse}
            </a>
            <p className="des">{des}</p>
          </div>
          <div className="bottom">
            <div className="teacher">
              <div className="avatar">
                <img src="img/avt.png" alt="" />
              </div>
              <div className="name">{nameTeacher}</div>
            </div>
            <Link to="/dang-ki-khoa-hoc" className="register-btn">
              Đăng Ký
            </Link>
          </div>
        </div>
      </div>
    );
}