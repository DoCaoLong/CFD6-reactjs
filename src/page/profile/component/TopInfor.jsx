import {Context} from "../../../App";
import useAuth from '../../../assets/hook/useAuth';

export default function TopInfor({}) {
  let {login} = useAuth(Context)
  return (
    <div className="top-info">
      <div className="avatar">
        {/* <span class="text">H</span> */}
        <img src={login.avatar} alt="" />
        <div className="camera" />
      </div>
      <div className="name">{login.name}</div>
      <p className="des">Thành viên của CFD3-OFFLINE</p>
    </div>
  );
}

