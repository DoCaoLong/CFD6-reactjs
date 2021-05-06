export default function ProjectItem({img="img/project/project (1).jpg", name, makeby }) {
  return (
    <a href="#" className="item col-md-6">
      <div className="wrap">
        <div className="cover">
          <img src={img} alt="" />
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="makeby">{makeby}</div>
        </div>
      </div>
    </a>
  );
}