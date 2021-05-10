import ReactDom from "react-dom"
import {Link} from "react-router-dom"
import useDelayLink from "../assets/hook/useDelayLink";

export function Nav(){
  let delayLink = useDelayLink()
  function handleClick(){
    document.querySelector(".lazy-load").style.display="flex";
  }
  return ReactDom.createPortal(
    <>
      <nav className="nav">
        <ul>
          <li className="li_login">
            <a href="#">Đăng nhập</a>
            <a href="#">Đăng ký</a>
          </li>
          <li>
            <Link className="activeNav" onClick={(e)=>{handleClick(); delayLink(e)}} to="/">
              Trang chủ
            </Link>
          </li>
          <li>
            <Link onClick={(e)=>{handleClick(); delayLink(e)}} to="/khoa-hoc">
              Khóa Học
            </Link>
          </li>
          <li>
            <Link onClick={(e)=>{handleClick(); delayLink(e)}} to="/du-an">
              Dự Án
            </Link>
          </li>
          <li>
            <Link onClick={(e)=>{handleClick(); delayLink(e)}} to="/hop-tac">
              Liên hệ
            </Link>
          </li>
        </ul>
      </nav>
      <div className="overlay_nav"></div>,
    </>,
    document.body
  );
   
}