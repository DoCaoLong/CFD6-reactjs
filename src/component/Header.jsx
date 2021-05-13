import { Link} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../App";
import useDelayLink from "../assets/hook/useDelayLink";
export function Header() {
  
  let delayLink = useDelayLink();

  let { login, handleLogout } = useContext(Context);

  function handleClick() {
    document.querySelector(".lazy-load").style.display = "flex";
  }

  function popupLogin(){
    document.querySelector('.popup-login').style.display= "flex"
  }

  return (
    <header id="header">
      <div className="wrap">
        <div className="menu-hambeger">
          <div className="button">
            <span />
            <span />
            <span />
          </div>
          <span className="text">menu</span>
        </div>
        <Link
          to="/"
          className="logo"
          onClick={(e) => {
            handleClick();
            delayLink(e);
          }}
        >
          <img src="/img/logo.svg" alt="" />
          <h1>CFD</h1>
        </Link>
        <div className="right">
          {login ? (
            <div className="have-login">
              <div className="account">
                <Link
                  to="/ca-nhan"
                  className="info"
                  onClick={(e) => {
                    handleClick();
                    delayLink(e);
                  }}
                >
                  <div className="name">{login.name}</div>
                  <div className="avatar">
                    <img src={login.avatar} alt="" />
                  </div>
                </Link>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <a href="#">Khóa học của tôi</a>
                <a href="#">Thông tin tài khoản</a>
                <a href="#" onClick={e => {e.preventDefault(); handleLogout()}}>Đăng xuất</a>
              </div>
            </div>
          ) : (
            <div class="not-login bg-none">
              <Link to="#" class="btn-register" onClick={popupLogin}>
                Đăng nhập
              </Link>
              <Link to="#" class="btn main btn-open-login">
                Đăng ký
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
