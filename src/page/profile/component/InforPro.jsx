import React from "react"
import { useDispatch, useSelector } from "react-redux";
import useFormValidate from "../../../assets/hook/useFormValidate";
import { UpdateAction } from "../../../redux/actions/AuthAction";

export default function InforPro() {
	
  // lấy rừ reddux
  let {login} = useSelector(store => store.auth)

	let { form, error, inputChange, check } = useFormValidate(
    {
      name: login.name,
      phone: login.phone,
      UrlFace: login.UrlFace,
      skype: login.skype,
      email: login.email,
    },
    {
      rule: {
        name: {
          required: true,
          pattern: "name",
        },
        phone: {
          required: true,
          pattern: "phone",
        },
        UrlFace: {
          required: true,
          pattern: "UrlFace",
        },
        skype: {
          required: true,
          pattern: "urlSkype",
        },
      },
      message: {
        name: {
          required: "Họ và tên không được bỏ trống",
          pattern: "Tên được viết bằng chữ in hoặc chữ thường",
        },
        phone: {
          required: "Số điện thoại không được bỏ trống",
          pattern: "Số điện thoại bắt đầu bằng 84 hoặc 0",
        },
        UrlFace: {
          required: "Đường dẫn Facebook không được bỏ trống",
          pattern: "Đường dẫn Facebook không đúng định dạng",
        },
        skype: {
          required: "Tên Skype không được bỏ trống",
          pattern: "Đường dẫn Skype không đúng định dạng",
        },
      },
    }
  );

  let dispatch = useDispatch()

	 function onSubmit(e){
    e.preventDefault();
    let errObj = check();
    if (Object.keys(errObj).length === 0) {
      console.log(form);
      dispatch(UpdateAction(form))
    }
  }

	return (
    <div className="tab1">
      <label style={{ flexWrap: "wrap" }}>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input
          value={form.name}
          name="name"
          onChange={inputChange}
          type="text"
          placeholder="Nguyễn Văn A"
        />
        {error.name && (
          <p style={{}} className="text-error pd-right-profile">
            {error.name}
          </p>
        )}
      </label>

      <label style={{ flexWrap: "wrap" }}>
        <p>
          Số điện thoại<span>*</span>
        </p>
        <input
          value={form.phone}
          name="phone"
          onChange={inputChange}
          type="text"
          placeholder="0949******"
        />
        {error.phone && (
          <p style={{}} className="text-error pd-right-profile">
            {error.phone}
          </p>
        )}
      </label>

      <label style={{ flexWrap: "wrap" }}>
        <p>
          Email<span>*</span>
        </p>
        <input value={form.email} defaultValue="vuong.dang@dna.vn" disabled type="text" />
      </label>

      <label style={{ flexWrap: "wrap" }}>
        <p>
          Facebook<span>*</span>
        </p>
        <input
          value={form.UrlFace}
          name="UrlFace"
          onChange={inputChange}
          type="text"
          placeholder="Facebook url"
        />
        {error.UrlFace && (
          <p style={{}} className="text-error pd-right-profile">
            {error.UrlFace}
          </p>
        )}
      </label>

      <label style={{ flexWrap: "wrap" }}>
        <p>
          Skype<span>*</span>
        </p>
        <input
          value={form.skype}
          name="skype"
          onChange={inputChange}
          type="text"
          placeholder="Skype url"
        />
        {error.skype && (
          <p style={{}} className="text-error pd-right-profile">
            {error.skype}
          </p>
        )}
      </label>
      <div onClick={onSubmit} className="btn main rect">
        LƯU LẠI
      </div>
    </div>
  );
}
