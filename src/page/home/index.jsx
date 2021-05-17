import Banner from "./component/Banner";
import CourseList from "./component/CourseList";
import Different from "./component/Different";
import Gallery from "./component/Gallery";
import Testimonial from "./component/Testimonial";
import { Link } from "react-router-dom";
import useDelayLink from "../../assets/hook/useDelayLink";
import { useEffect, useState } from "react";
import CourseApi from "../../service/CourseApi";
export default function Home() {
  let [list, setList] = useState({
    offline: [],
    online: [],
  });

  // useEffect thực hiện 1 lần khi render
  useEffect(() => {
    CourseApi.list()
		.then((res) => {
      setList(res);
    });
  }, []);

	// cách 2
	// useEffect(async() =>{
	// 	setList(await CourseApi.list())
	// }, [])

  let delayLink = useDelayLink();

  function handleClick() {
    document.querySelector(".lazy-load").style.display = "flex";
  }
  return (
    <main className="homepage" id="main">
      <Banner />
      <CourseList online={list.online} offline={list.offline} />
      {/* cách truyền nhanh  */}
      {/* <CourseList {...list}/> */}
      <Different />
      <Testimonial />
      <Gallery />
      <section className="section-action">
        <div className="container">
          <h3>
            Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?
          </h3>
          <Link
            to="/dang-ki-khoa-hoc"
            onClick={(e) => {
              handleClick();
              delayLink(e);
            }}
            className="btn main round bg-white"
          >
            Đăng ký
          </Link>
        </div>
      </section>
    </main>
  );
}
