import React from "react";
import useFormValidate from "../../assets/hook/useFormValidate"
export default function Contact() {

  let { form, error, inputChange, check } = useFormValidate(
    {
      name: "",
      phone: "",
      email: "",
      website: "",
      title: "",
      content: "",
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
        email: {
          required: true,
          pattern: "email",
        },
        website: {
          pattern: "url",
        },
        title: {
          required: true,
        },
        content: {
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
        email: {
          required: "Email không được bỏ trống",
          pattern: "Email không đúng định dạng example@gmail.com",
        },
        website: {
          pattern: "Website không đúng định dạng",
        },
        title: {
          required: "Tiêu đề không được bỏ trống",
        },
        content: {
          required: "Nội dung không được bỏ trống",
        },
      },
    }
  );

  function onSubmit(e){
    e.preventDefault();
    let errObj = check();
    if (Object.keys(errObj).length === 0) {
      console.log(form);
      //call API
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
            {error.name && <p className="text-error pd-right-contact">{error.name}</p>}
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
            {error.phone && <p className="text-error pd-right-contact">{error.phone}</p>}
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
            {error.email && <p className="text-error pd-right-contact">{error.email}</p>}
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
            {error.website && <p className="text-error pd-right-contact">{error.website}</p>}
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
            {error.title && <p className="text-error pd-right-contact">{error.title}</p>}
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
            {error.content && (
              <p className="text-error pd-right-contact">{error.content}</p>
            )}
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


