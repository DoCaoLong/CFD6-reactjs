import {Link} from 'react-router-dom'
import useDelayLink from '../../../assets/hook/useDelayLink';
export default function Course({ thumbnail, title, teacher, short_description }) {
  //  title,
  // short_description,
  // thumbnail,
  // teacher,
  // course_status,
  // slug,
  let delayLink = useDelayLink();

  function handleClick() {
    document.querySelector(".lazy-load").style.display = "flex";
  }

  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <Link to="#" className="cover">
          <img src={thumbnail} alt="" />
        </Link>
        <div className="info">
          <Link className="name" to="#">
            {title}
          </Link>
          <p className="des">{short_description}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src="/img/avt.png" alt="" />
            </div>
            <div className="name">{teacher}</div>
          </div>
          <Link
            onClick={(e) => {
              handleClick();
              delayLink(e);
            }}
            to="/dang-ki-khoa-hoc"
            className="register-btn"
          >
            Đăng Ký
          </Link>
        </div>
      </div>
    </div>
  );
}

