import {Link} from 'react-router-dom'
import useDelayLink from '../../../assets/hook/useDelayLink';
export default function Course({ img, namecourse, name, des }) {

  let delayLink = useDelayLink();

  function handleClick() {
    document.querySelector(".lazy-load").style.display = "flex";
  }

  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <Link to="#" className="cover">
          <img src={img} alt="" />
        </Link>
        <div className="info">
          <Link className="name" to="#">
            {namecourse}
          </Link>
          <p className="des">{des}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src="/img/avt.png" alt="" />
            </div>
            <div className="name">{name}</div>
          </div>
          <Link onClick={(e)=>{handleClick(); delayLink(e)}} to="/dang-ki-khoa-hoc" className="register-btn">Đăng Ký</Link>
        </div>
      </div>
    </div>
  );
}

