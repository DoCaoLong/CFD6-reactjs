import InforPro from "./component/InforPro";
import CoursePro from "./component/CoursePro";
import TabTitle from "./component/TabTitle";
import TopInfor from "./component/TopInfor";
import ProjectPro from "./component/ProjectPro";
import PaymentPro from "./component/PaymentPro";
import { Switch, Route, useRouteMatch} from "react-router-dom";
import CoinPro from "./component/CoinPro";

export default function Profile() {

  let { path } = useRouteMatch();

  return (
    <main className="profile" id="main">
      <section>
        <TopInfor/>
        <div className="container">
          <div className="tab">
            <TabTitle />
            <div className="tab-content">
              <Switch>
                <Route
                  path={`${path}/khoa-hoc-cua-ban`}
                  component={CoursePro}
                />

                <Route path={`${path}/du-an-da-lam`} component={ProjectPro} />

                <Route
                  path={`${path}/lich-su-thanh-toan`}
                  component={PaymentPro}
                />

                <Route path={`${path}/quan-ly-coin`} component={CoinPro} />

                <Route component={InforPro} />
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
