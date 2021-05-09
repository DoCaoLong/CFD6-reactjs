import { useState } from "react";

export default function Form() {
  let [form, setform] = useState({
    name: "",
    email: "",
    phone:"",
    UrlFace:"",
    idea:"",
    coin: true,
    payment: "chuyen khoan"
  });
  let [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    UrlFace: "",
    idea: "",
  });
  function inputChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    if (e.target.type === "checkbox"){
        value= e.target.checked
    }
    setform({
      ...form,
      [name]: value,
    });
  }
  function handleSelect(e){
    setform({
      ...form,
      payment: e.target.dataset.value
    })
    }
  function onSubmit(e) {
    e.preventDefault()
    let errObj = {};
    if (!form.name.trim().replace(/ +/g, " ")) {
      errObj.name = "Tên không được bỏ trống";
    } else if (!/^[A-Za-z\s]+$/.test(form.name)) {
      errObj.name = "Tên không đúng định dạng";
    }

    if (!form.email.trim()) {
      errObj.email = "Email không được bỏ trống";
    } 
    else if (
      !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(form.email)
    ) {
      errObj.email = "Email không đúng định dạng";
    }

    if (!form.phone.trim()) {
      errObj.phone = "Số điện thoại không được bỏ trống";
    } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
      errObj.phone = "Số điện thoại không đúng định dạng";
    }

    if(!form.UrlFace.trim()){
      errObj.UrlFace = "Đường dẫn Facebook không được bỏ trống";
    }
    else if (!/(?:http:\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(\d.*))?([\w\-]*)?/.test(form.UrlFace)) {
      errObj.UrlFace = "Đường dẫn Facebook không đúng định dạng";
    }
    // if (!form.idea) {
    //   errObj.idea = "Ý kiến cá nhân không được bỏ trống";
    // }
  
    setError(errObj);

    if (Object.keys(errObj).length === 0) {
      console.log(form);
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
        {error.name && <p className="text-error">{error.name}</p>}
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
        {error.phone && <p className="text-error">{error.phone}</p>}
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
        {error.email && <p className="text-error">{error.email}</p>}
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
        {error.UrlFace && <p className="text-error">{error.UrlFace}</p>}
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
              onClick={handleSelect}
              data-value="Chuyen Khoan"
              data-name="payment"
              href="#"
            >
              Chuyển khoản
            </a>
            <a
              onClick={handleSelect}
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
        {error.idea && <p className="text-error">{error.idea}</p>}
      </label>
      <div onClick={onSubmit} className="btn main rect">
        đăng ký
      </div>
    </div>
  );
}
