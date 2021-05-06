export default function Inner(params) {
  return (
    <div className="inner" style={{ padding: "50px" }}>
      <div className="logo">
        <img
          src="img/logo.svg"
          alt=""
          style={{ width: "100px", marginBottom: "10px" }}
        />
      </div>
      <div className="content">
        <h2>Đăng ký khóa học tại CFD.</h2>
        <p>
          Chào mừng tân binh <strong>Trần Nghĩa</strong>,
        </p>
        <p>
          Bạn đã đăng ký khóa học{" "}
          <a
            href="#"
            target="_blank"
            style={{ textDecoration: "none", color: "#00afab" }}
          >
            <strong>CFD2 Căn Bản</strong>
          </a>{" "}
          tại <strong>CFD</strong> thành công, chúng tôi sẽ chủ động liên hệ
          thông qua số điện thoại của bạn.
        </p>
        <a
          href="#"
          target="_blank"
          className="btn"
          style={{
            backgroundColor: "#00afab",
            borderRadius: "50px",
            padding: "10px 20px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
            textDecoration: "none",
            textTransform: "uppercase",
            fontSize: "14px",
            marginTop: "20px",
          }}
        >
          Trang chủ CFD
        </a>
      </div>
    </div>
  );
}
