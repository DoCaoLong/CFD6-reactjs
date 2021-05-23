import { useSelector } from "react-redux";


export default function TopInfor({}) {
  // let {login} = useAuth(Context)
  let {login} = useSelector((store) => store.auth);

  return (
    <div className="top-info">
      <div className="avatar">
        {/* <span class="text">H</span> */}
        <img src={login?.avatar} alt="" />
        <div className="camera" />
      </div>
      <div className="name">{login?.name}</div>
      <p className="des">Thành viên của CFD3-OFFLINE</p>
    </div>
  );
}

