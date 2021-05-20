import Infor from "./Infor";

export default function BannerStyle2({title, time, date}) {
  let injectedProps = { title, time, date};
  return (
    <section className="banner style2" style={{ background: "#cde6fb" }}>
      <div className="container">
        <Infor {...injectedProps} />
      </div>
      <div className="bottom">
        <div className="container">
          <div className="video">
            <div className="icon">
              <img src="img/play-icon-white.png" alt="" />
            </div>
            <span>giới thiệu</span>
          </div>
          <div className="money">4.000.000 VND</div>
        </div>
      </div>
    </section>
  );
}
