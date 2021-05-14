import useDelayLink from "../assets/hook/useDelayLink";
import { Link } from "react-router-dom";
export function CourseItem({
  name,
  des,
  img,
  teacher_avatar,
  teacher_name,
  status,
}) {
   let delayLink = useDelayLink();

   function handleClick() {
     document.querySelector(".lazy-load").style.display = "flex";
   }

  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <Link onClick={(e)=>{handleClick(); delayLink(e)}} className="cover" to="/chi-tiet-khoa-hoc">
          <img src={img} alt="" />
          {status === "da-ket-thuc" ? (
            <span className="badge b1">Đã kết thúc</span>
          ) : status === "dang-dien-ra" ? (
            <span className="badge b2">Đang diễn ra</span>
          ) : (
            <span className="badge b3">Sắp diễn ra</span>
          )}
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
          <Link onClick={(e)=>{handleClick(); delayLink(e)}} className="name" to="/chi-tiet-khoa-hoc">
            {name}
          </Link>
          <p className="des">{des}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src={teacher_avatar} alt="" />
            </div>
            <div className="name">{teacher_name}</div>
          </div>
          <Link onClick={(e)=>{handleClick(); delayLink(e)}} to="/dang-ki-khoa-hoc" className="register-btn">
            Đăng Ký
          </Link>
        </div>
      </div>
    </div>
  );
}
