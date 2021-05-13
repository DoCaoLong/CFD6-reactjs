import { NavLink, useRouteMatch,  } from "react-router-dom";

export default function TabTitle() {
  let {path} = useRouteMatch();
  return (
    <div className="tab-title">
      <NavLink exact to={`${path}`}>Thông tin tài khoản</NavLink>
      <NavLink to={`${path}/khoa-hoc-cua-ban`}>Khóa học của bạn</NavLink>
      <NavLink to={`${path}/du-an-da-lam`}>Dự án đã làm</NavLink>
      <NavLink to={`${path}/lich-su-thanh-toan`}>Lịch sử thanh toán</NavLink>
      <NavLink to={`${path}/quan-ly-coin`}>Quản lý COIN của tôi</NavLink>
      {/* activeclassname */}
    </div>
  );
}
