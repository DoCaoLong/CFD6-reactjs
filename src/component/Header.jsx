import { Link} from "react-router-dom";
import useDelayLink from "../assets/hook/useDelayLink";
// import useAuth from "../assets/hook/useAuth";
import { useSelector, useDispatch } from "react-redux";
import { LogoutAciton } from "../redux/actions/AuthAction";
export function Header() {
  
  let delayLink = useDelayLink();
  let dispatch = useDispatch();
  let {login} = useSelector(store => store.AuthReducer);
  // let { login, handleLogout } = useAuth();
  
  function logout(){
    dispatch(LogoutAciton())
  }

  function handleClick() {
    document.querySelector(".lazy-load").style.display = "flex";
  }
  
  function popupLogin() {
    document.querySelector(".popup-login").style.display = "flex";
  }

  function popupRegis() {
    document.querySelector(".popup-regis").style.display = "flex";
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
            e.preventDefault();
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
                    e.preventDefault();
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
                <Link to="/ca-nhan/khoa-hoc-cua-ban">Khóa học của tôi</Link>
                <Link
                  to="/ca-nhan"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick();
                    delayLink(e);
                  }}
                >
                  Thông tin tài khoản
                </Link>
                <Link to="#" onClick={(e) => { 
                    e.preventDefault();
                    logout();
                    handleClick();
                    delayLink(e);
                  }}>Đăng xuất</Link>
              </div>
            </div>
          ) : (
            <div class="not-login bg-none">
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  popupLogin(e);
                }}
                to="#"
                class="btn main btn-open-login"
                style={{ backgroundColor: "#f4f7f6", color: "#000" }}
              >
                Đăng nhập
              </Link>
              <Link to="#" class="btn main btn-register" onClick={popupRegis}>
                Đăng ký
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
