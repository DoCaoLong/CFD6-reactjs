import React from "react";
import useFormValidate from "../../../assets/hook/useFormValidate"
export default function Form() {
 	let { form, error, inputChange, check } = useFormValidate(
    {
      name: "",
      email: "",
      phone: "",
      UrlFace: "",
      idea: "",
      coin: true,
      payment: "chuyen khoan",
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
        email: {
          required: true,
          pattern: "email",
        },
        idea: {
          required: true,
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
        email: {
          required: "Email không được bỏ trống",
          pattern: "Email không đúng định dạng example@gmail.com",
        },
        idea: {
          required: "Ý kiến không được bỏ trống",
        },
      },
    }
  );
  // function handleSelect(e){
  //   setform({
  //     ...form,
  //     payment: e.target.dataset.value,
  //   });
  //   }

 	 function onSubmit(e) {
     e.preventDefault();
     let errObj = check();
     if (Object.keys(errObj).length === 0) {
       console.log(form);
       //call API
     }
   }
  return (
    <div className="form">
      <label style={{ flexWrap: "wrap" }}>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input
        
          value={form.name}
          name="name"
          onChange={inputChange}
          type="text"
          placeholder="Họ và tên bạn"
        />
        {error.name && <p className="text-error pd-left-register">{error.name}</p>}
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
          placeholder="Số điện thoại"
        />
        {error.phone && <p className="text-error pd-left-register">{error.phone}</p>}
      </label>

      <label style={{ flexWrap: "wrap" }}>
        <p>
          Email<span>*</span>
        </p>
        <input
          value={form.email}
          name="email"
          onChange={inputChange}
          type="text"
          placeholder="Email của bạn"
        />
        {error.email && <p className="text-error pd-left-register">{error.email}</p>}
      </label>

      <label style={{ flexWrap: "wrap" }}>
        <p>
          URL Facebook<span>*</span>
        </p>
        <input
          value={form.UrlFace}
          name="UrlFace"
          onChange={inputChange}
          type="text"
          placeholder="https://facebook.com"
        />
        {error.UrlFace && <p className="text-error pd-left-register">{error.UrlFace}</p>}
      </label>

      <label className="disable">
        <p>Sử dụng COIN</p>
        <div className="checkcontainer">
          Hiện có <strong>300 COIN</strong>
          {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
          {/* Cần ít nhất 200 COIN để giảm giá */}
          <input
            name="coin"
            onChange={inputChange}
            type="checkbox"
            defaultChecked={form.coin}
          />
          <span className="checkmark" />
        </div>
      </label>

      <label style={{ flexWrap: "wrap" }}>
        <p>Hình thức thanh toán</p>
        <div className="select">
          <div className="head">Chuyển khoản</div>
          <div className="sub">
            <a
              // onClick={handleSelect}
              data-value="Chuyen Khoan"
              data-name="payment"
              href="#"
            >
              Chuyển khoản
            </a>
            <a
              // onClick={handleSelect}
              data-value="Tien Mat"
              data-name="payment"
              href="#"
            >
              Thanh toán tiền mặt
            </a>
          </div>
        </div>
      </label>

      <label style={{ flexWrap: "wrap" }}>
        <p>Ý kiến cá nhân</p>
        <input
          value={form.idea}
          name="idea"
          onChange={inputChange}
          type="text"
          placeholder="Mong muốn cá nhân và lịch bạn có thể học."
        />
        {error.idea && <p className="text-error pd-left-register">{error.idea}</p>}
      </label>
      <div onClick={onSubmit} className="btn main rect">
        đăng ký
      </div>
    </div>
  );
}
