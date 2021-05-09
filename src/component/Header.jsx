import {Link} from 'react-router-dom'
import useDelayLink from '../assets/hook/useDelayLink'
export function Header() {

  let delayLink = useDelayLink()

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
        <Link to="/" className="logo" onClick={delayLink}>
          <img src="/img/logo.svg" alt="" />
          <h1>CFD</h1>
        </Link>
        <div className="right">
          <div className="have-login">
            <div className="account">
              <Link to="/ca-nhan" className="info" onClick={delayLink}>
                <div className="name">Trần Lê Trọng Nghĩa</div>
                <div className="avatar">
                  <img src="/img/avt.png" alt="" />
                </div>
              </Link>
            </div>
            <div className="hamberger"></div>
            <div className="sub">
              <a href="#">Khóa học của tôi</a>
              <a href="#">Thông tin tài khoản</a>
              <a href="#">Đăng xuất</a>
            </div>
          </div>
          {/* <div class="not-login bg-none">
				  <a href="#" class="btn-register">Đăng nhập</a>
				  <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
			  </div> */}
        </div>
      </div>
    </header>
  );
}
