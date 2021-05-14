import {Link} from 'react-router-dom'
import useDelayLink from '../../../assets/hook/useDelayLink';
export default function Infor(params) {

  let delayLink = useDelayLink();

  function handleClick() {
    document.querySelector(".lazy-load").style.display = "flex";
  }
  return (
    <div className="info">
      <h1>Thực Chiến front-end căn bản</h1>
      <div className="row">
        <div className="date">
          <strong>Khai giảng:</strong> 12/10/2020
        </div>
        <div className="time">
          <strong>Thời lượng:</strong> 18 buổi
        </div>
      </div>
      <Link onClick={(e)=>{handleClick(); delayLink(e)}}  to="/dang-ki-khoa-hoc" className="btn white round cl-white" style={{ colorBtn: "#70b6f1", border:"2px solid #000", color: "#000"}}>
        đăng ký
      </Link>
    </div>
  );
}
