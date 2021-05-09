import ReactDom from "react-dom"
import {Link} from "react-router-dom"
import useDelayLink from "../assets/hook/useDelayLink";

export function Nav(){
  let delayLink = useDelayLink()
  return ReactDom.createPortal(
    <>
      <nav className="nav">
        <ul>
          <li className="li_login">
            <a href="#">Đăng nhập</a>
            <a href="#">Đăng ký</a>
          </li>
          <li className="active">
            <Link onClick={delayLink} to="/">
              Trang chủ
            </Link>
          </li>
          <li>
            <Link onClick={delayLink} to="/khoa-hoc">
              Khóa Học
            </Link>
          </li>
          <li>
            <Link onClick={delayLink} to="/du-an">
              Dự Án
            </Link>
          </li>
          <li>
            <Link onClick={delayLink} to="/hop-tac">
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