export default function Course({ img, namecourse, name, des }) {
  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <a href="#" className="cover">
          <img src={img} alt="" />
        </a>
        <div className="info">
          <a className="name" href="#">
            {namecourse}
          </a>
          <p className="des">{des}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src="img/avt.png" alt="" />
            </div>
            <div className="name">{name}</div>
          </div>
          <div className="register-btn">Đăng Ký</div>
        </div>
      </div>
    </div>
  );
}

