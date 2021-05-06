export default function TopInfor({ img, name, des }) {
  return (
    <div className="top-info">
      <div className="avatar">
        {/* <span class="text">H</span> */}
        <img src={img} alt="" />
        <div className="camera" />
      </div>
      <div className="name">{name}</div>
      <p className="des">{des}</p>
    </div>
  );
}

// trần nghĩa
