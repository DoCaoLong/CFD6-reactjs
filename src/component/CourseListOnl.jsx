import {Link} from 'react-router-dom'
import useDelayLink from '../assets/hook/useDelayLink';

export function CourseListOnl({img, nameCourse, des, nameTeacher, }){

   let delayLink = useDelayLink();

   function handleClick() {
     document.querySelector(".lazy-load").style.display = "flex";
   }

    return (
      <div className="col-md-4 course gray">
        <div className="wrap">
          <Link onClick={(e)=>{handleClick(); delayLink(e)}} to="/chi-tiet-khoa-hoc" className="cover" to="/chi-tiet-khoa-hoc">
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
          </Link>
          <div className="info">
            <Link to="#" className="name">
              {nameCourse}
            </Link>
            <p className="des">{des}</p>
          </div>
          <div className="bottom">
            <div className="teacher">
              <div className="avatar">
                <img src="img/avt.png" alt="" />
              </div>
              <div className="name">{nameTeacher}</div>
            </div>
            <Link onClick={(e)=>{handleClick(); delayLink(e)}}  to="/dang-ki-khoa-hoc" className="register-btn">
              Đăng Ký
            </Link>
          </div>
        </div>
      </div>
    );
}