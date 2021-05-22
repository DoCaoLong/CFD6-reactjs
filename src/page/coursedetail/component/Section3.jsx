import Course from "./Course"

export default function Section3({ thumbnail, title, teacher, short_description }) {
  return (
    <section className="section-3">
      <div className="container">
        <div className="textbox">
          <h3 className="sub-title">DỰ ÁN</h3>
          <h2 className="main-title">THÀNH VIÊN</h2>
        </div>
        <div className="list row">
          <Course
            thumbnail={thumbnail}
            short_description={short_description}
            title={title}
            teacher={teacher}
          />
          <Course
            thumbnail={thumbnail}
            short_description={short_description}
            title={title}
            teacher={teacher}
          />
          <Course
            thumbnail={thumbnail}
            short_description={short_description}
            title={title}
            teacher={teacher}
          />
        </div>
      </div>
    </section>
  );
}
