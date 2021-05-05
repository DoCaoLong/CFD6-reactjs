export default function Bottom(params) {
  return (
    <div
      className="bottom"
      style={{
        fontSize: "13px",
        background: "#ddd",
        padding: "30px 50px",
        color: "#767676",
      }}
    >
      <p style={{ margin: "0 0 2px 0" }}>
        Đây là email được gửi từ hệ thống CFD.
      </p>
      <p style={{ margin: "0 0 2px 0" }}>
        Vui lòng không trả lời trực tiếp qua email này.
      </p>
      <p style={{ margin: 0 }}>
        Văn phòng CFD, số 11, Phan Kế Bính, Đa Kao, Quận 1, TP Hồ Chí Minh, Việt
        Nam.
      </p>
    </div>
  );
}
