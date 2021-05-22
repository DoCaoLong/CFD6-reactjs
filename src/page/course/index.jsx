import { CourseItem } from "../../component"
import { useEffect, useState } from "react";
import CourseApi from "../../service/CourseApi";
export default function Course(){
  // Lấy dử liệu danh sách khóa học khi biết có off và onl
  // let [list, setList] = useState({
  //    offline: [],
  //    online: [],
  // });

  let [list, setList] = useState()

  // useEffect thực hiện 1 lần khi render
  useEffect(() => {
    CourseApi.list().then((res) => {
      // setList({
      //   offline: res.offline,
      //   online: res.online
      // });
      setList(res);
      console.log(res);
     
    });
  }, []);
      console.log("list",list);

  return (
    <main className="homepage" id="main">
      <section className="section-1">
        <div className="container">
          <h2 className="main-title">KHÓA HỌC CFD</h2>
          <p className="top-des">
            The readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>
          <div className="textbox">
            <h3 className="sub-title">KHÓA HỌC</h3>
            <h2 className="main-title">ONLINE</h2>
          </div>
          <div className="list row">
            {list?.online.map((e) => (
              <CourseItem {...e} key={e._id} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-2 section-blue">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">KHÓA HỌC</h3>
            <h2 className="main-title">OFFLINE</h2>
          </div>
          <div className="list row">
            {list?.offline.map((e) => (
              <CourseItem {...e} key={e._id} />
            ))}
          </div>
          <div className="text-deco">C</div>
        </div>
      </section>
    </main>
  );
}