import CoinHistory from "./component/CoinHistory"
import CoinInfor from "./component/CoinInfor"
import Tab1 from "./component/Tab1"
import Tab2 from "./component/Tab2"
import Tab3 from "./component/Tab3"
import Tab4 from "./component/Tab4"
import TabTitle from "./component/TabTitle"
import TopInfor from "./component/TopInfor"

export default function Profile(){
    return (
      <main className="profile" id="main">
        <section>
          <TopInfor
            img="img/avatar-lg.png"
            name="Trần nghĩa"
            des="Thành viên của team CFD1-OFFLINE"
          />
          <div className="container">
            <div className="tab">
              <TabTitle/>
              <div className="tab-content">
                <Tab1/>
                <Tab2/>
                <Tab3/>
                <Tab4/>
                <div className="tab5 cointab" style={{ display: "block" }}>
                  <CoinInfor/>
                  <CoinHistory/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
}