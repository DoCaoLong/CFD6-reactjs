export default function TeamMember({
  text = "H",
  img = "img/thumb-member.jpg",
  name = "long",
  title = "cfd1",
}) {
  return (
    <div className="item col-md-3 col-sm-4 col-xs-6">
      <div className="wrap">
        <div className="cover">
          <span className="text">{text}</span>
          <img src={img} alt="" />
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <p className="title">{title}</p>
        </div>
      </div>
    </div>
  );
}