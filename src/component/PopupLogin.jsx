import React, { useContext } from 'react'
import reactDom from 'react-dom'
import { Context } from '../App';
import useFormValidate from '../assets/hook/useFormValidate';
export function PopupLogin() {

  let { inputChange, check, error, form } = useFormValidate(
    {
      username: "",
      password: "",
    },
    {
      rule: {
        username: {
          required: true,
          pattern: "email",
        },
        password: {
          required: true,
          min: 6,
          max: 32
        },
      },
      message:{
        username:{
          require: "Email không được bỏ trống",
          pattern: "Email không đúng định dạng"
        },
        password:{
          require: "Mật khẫu không được bỏ trống",
        }
      }
    }
  );
  let {handleLogin} = useContext(Context)

  function close(){
    document.querySelector('.popup-login').style.display= 'none'
  }

  function loginHandle(e){
     e.preventDefault();
    let errObj = check()
    if(Object.keys(errObj).length === 0){
      let res = handleLogin(form.username, form.password)
      if(res){
        alert(res)
      }else{
        close()
      }
    }
  }

  return reactDom.createPortal(
    <div className="popup-form popup-login" style={{ display: "none" }}>
      <div className="wrap">
        {/* login-form */}
        <div className="ct_login" style={{ display: "block" }}>
          <h2 className="title">Đăng nhập</h2>
          <input
            value={form.username}
            name="username"
            onChange={inputChange}
            type="text"
            placeholder="Email / Số điện thoại"
          />
          {error.username && (
            <p className="text-error pd-login">{error.username}</p>
          )}
          <input
            className="mb-10"
            value={form.password}
            name="password"
            onChange={inputChange}
            type="password"
            placeholder="Mật khẩu"
          />
          {error.password && (
            <p className="text-error pd-login">{error.password}</p>
          )}
          <div className="remember">
            <label className="btn-remember">
              <div>
                <input type="checkbox" />
              </div>
              <p>Nhớ mật khẩu</p>
            </label>
            <a href="#" className="forget">
              Quên mật khẩu?
            </a>
          </div>
          <div className="btn rect main btn-login" onClick={loginHandle}>
            đăng nhập
          </div>
          <div className="text-register" style={{}}>
            <strong>hoặc đăng ký bằng</strong>
          </div>
          <div>
            <div className="btn btn-icon rect white btn-google">
              <img src="img/google.svg" alt="" />
              Google
            </div>
          </div>
          <div className="close">
            <img src="img/close-icon.png" alt="" />
          </div>
        </div>
        {/* email form */}
        <div className="ct_email">
          <h2 className="title">Đặt lại mật khẩu</h2>
          <input type="text" placeholder="Email" />
          <div className="btn rect main btn-next">Tiếp theo</div>
          <div className="back" />
          <div className="close">
            <img src="img/close-icon.png" alt="" />
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("root2")
  );
}
