export default function TeamTeacher({img ="img/thumb-member.jpg", name, title }) {
  return (
    <div className="item col-md-6 col-sm-6">
      <div className="wrap">
        <div className="cover">
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