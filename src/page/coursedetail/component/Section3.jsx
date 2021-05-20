import Course from "./Course"

export default function Section3(img, namecourse, name, des) {
  // let injectedProps = { title, time, date };
  return (
    <section className="section-3">
      <div className="container">
        <div className="textbox">
          <h3 className="sub-title">DỰ ÁN</h3>
          <h2 className="main-title">THÀNH VIÊN</h2>
        </div>
        <div className="list row">
          <Course
            img="img/img.png"
            des="One of the best corporate fashion brands in Sydney"
            namecourse="Reacjs/Redux"
            name="Trần Nghĩa"
          />
          <Course
            img="img/img2.png"
            des="One of the best corporate fashion brands in Sydney"
            namecourse="Animation"
            name="Vương Đặng"
          />
          <Course
            img="img/img3.png"
            des="One of the best corporate fashion brands in Sydney"
            namecourse="Scss, Grunt JS và Boostrap 4"
            name="Trần Nghĩa"
          />
        </div>
      </div>
    </section>
  );
}
