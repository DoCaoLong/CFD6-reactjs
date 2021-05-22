import React, { useState } from 'react'
import { LOGIN, LOGOUT } from "../redux/Type";

import reactDom from 'react-dom'
import { useDispatch, useSelector } from 'react-redux';
// import useAuth from '../assets/hook/useAuth';
import useFormValidate from '../assets/hook/useFormValidate';
import AuthApi from '../service/AuthApi';
import { LoginAciton } from '../redux/actions/AuthAction';
export function PopupLogin() {
  let [loginError, setLoginError] = useState(null);
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
          max: 32,
        },
      },
    }
  );

  // tác động lên store thì dùng dispatch
  let dispatch = useDispatch();

  /*let { handleLogin } = useAuth();*/

  let st = useSelector((store) => store);
  // console.log(st);

  function close() {
    document.querySelector(".popup-login").style.display = "none";
  }

  async function loginHandle(e) {
    e.preventDefault();
    let errObj = check();
    if (Object.keys(errObj).length === 0) {
      let res = await AuthApi.login({
        username: form.username,
        password: form.password,
      });
      if (res.data) {
        // dispatch({
        //   type: LOGIN,
        //   payload: res.data,
        // });
        dispatch(LoginAciton(res.data))
        close();
      } else if(res.error){
        setLoginError(res.error);
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
          {loginError && <p className="text-error">{loginError}</p>}
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
          <div className="close" onClick={close}>
            <img src="img/close-icon.png" alt="" />
          </div>
        </div>
        {/* email form */}
        {/* <div className="ct_email">
          <h2 className="title">Đặt lại mật khẩu</h2>
          <input type="text" placeholder="Email" />
          <div className="btn rect main btn-next">Tiếp theo</div>
          <div className="back" />
          <div className="close">
            <img src="img/close-icon.png" alt="" />
          </div>
        </div> */}
      </div>
    </div>,
    document.getElementById("root2")
  );
}
