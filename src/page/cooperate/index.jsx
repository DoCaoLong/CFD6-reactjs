import React, {useState } from "react";
export default function Cooperate() {

  // let [name, setName] = useState('')
  // let [phone, setPhone] = useState('')
  // let [email, setEmail] = useState('')

  let [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    website:"",
    title:"",
    content:""
  });

  let [error, setError] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    title: "",
    content: "",
  });

  function inputChange(e){
    let name = e.target.name
    let value = e.target.value
    setForm({
      ...form,
      [name]:value
    })
  }

  function onSubmit(e){
    form.name.trim().replace(/ +/g," ");
    e.preventDefault();

    let errObj = {};

    if (!form.name.trim().replace(/ +/g, " ")) {
      errObj.name = "Vui lòng nhập tên";
    } else if (!/^[A-Za-z\s]+$/.test(form.name)) {
      errObj.name = "Tên không đúng định dạng";
    }

    if (!form.phone.trim()) {
      errObj.phone = "Vui lòng nhập số điện thoại";
    }

    else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)){
      errObj.phone = "Số điện thoại không đúng định dạng";
    }

    if (!form.email.trim()) {
      errObj.email = "Vui lòng nhập email";
    }

    else if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(form.email)){
       errObj.email = "Email không đúng định dạng";
    }

    if(form.website.trim() && !/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(form.website)){
      errObj.website = "Website không đúng định dạng";
    }

    if (!form.title.trim()) {
      errObj.title = "Vui lòng nhập tiêu đề";
    }

    if (!form.content.trim()) {
      errObj.content = "Vui lòng nhập nội dung";
    }

    setError(errObj);

    if (Object.keys(errObj).length === 0) {
      console.log(form);
    }

  }
  


  return (
    <main className="register-course" id="main">
      <section className="section-1 wrap container">
        {/* <div class="main-sub-title">liên hệ</div> */}
        <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
        <p className="top-des">
          Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra
          những sản phẩm giá trị, cũng như việc hợp tác với các đối tác tuyển
          dụng và công ty trong và ngoài nước.
        </p>
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
            {/* <InputComponent ref={inputRef} /> */}
          </label>

          <label style={{ flexWrap: "wrap" }}>
            <p>Số điện thoại</p>
            <input
              name="phone"
              value={form.phone}
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
              name="email"
              value={form.email}
              onChange={inputChange}
              type="text"
              placeholder="Email của bạn"
            />
            {error.email && <p className="text-error">{error.email}</p>}
          </label>

          <label style={{ flexWrap: "wrap" }}>
            <p>Website</p>
            <input
              value={form.website}
              name="website"
              onChange={inputChange}
              type="text"
              placeholder="Đường dẫn website http://"
            />
            {error.website && <p className="text-error">{error.website}</p>}
          </label>

          <label style={{ flexWrap: "wrap" }}>
            <p>
              Tiêu đề<span>*</span>
            </p>
            <input
              value={form.title}
              name="title"
              type="text"
              onChange={inputChange}
              placeholder="Tiêu đề liên hệ"
            />
            {error.title && <p className="text-error">{error.title}</p>}
          </label>

          <label style={{ flexWrap: "wrap" }}>
            <p>
              Nội dung<span>*</span>
            </p>
            <textarea
              value={form.content}
              name="content"
              onChange={inputChange}
              cols={30}
              rows={10}
              defaultValue={""}
            />
            {error.content && <p className="text-error">{error.content}</p>}
          </label>

          <div onClick={onSubmit} className="btn main rect">
            đăng ký
          </div>

        </div>
      </section>
      {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
    </main>
  );
}


