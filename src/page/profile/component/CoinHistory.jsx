export default function CoinHistory() {
  return (
    <div className="coinhistory">
      <h3>
        <strong>Lịch sử COIN</strong>
      </h3>
      {/* <p>Chưa sử dụng COIN</p> */}
      <div className="itemhistory">
        <div className="td">
          <strong>COIN</strong>
        </div>
        <div className="td">
          <strong>Thời gian</strong>
        </div>
        <div className="td">
          <strong>Nội dung</strong>
        </div>
        <div className="td">
          <strong>Trạng thái</strong>
        </div>
      </div>
      <div className="itemhistory">
        <div className="td">
          <span className="coin red">-300</span>
        </div>
        <div className="td">09/09/2020</div>
        <div className="td">Giới thiệu khóa học cho học viên mới</div>
        <div className="td">Đã chấp nhận</div>
      </div>
      <div className="itemhistory">
        <div className="td">
          <span className="coin">+300</span>
        </div>
        <div className="td">18/10/2020</div>
        <div className="td">Dùng COIN để quy đổi sang Voucher Tiki</div>
        <div className="td">Đã chấp nhận</div>
      </div>
      <div className="itemhistory">
        <div className="td">
          <span className="coin red">-300</span>
        </div>
        <div className="td">18/10/2020</div>
        <div className="td">Dùng COIN để đổi sang Thẻ nạp điện thoại</div>
        <div className="td">Chờ duyệt</div>
      </div>
    </div>
  );
}
