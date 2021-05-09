import TeamTeacher from "./component/TeamTeacher";
import TeamMember from "./component/TeamMember";

export default function Team() {
    return (
      <main className="team" id="main">
        <section>
          <div className="container">
            <div className="top">
              <h2 className="main-title">cfd team</h2>
              <p className="top-des">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam
                tincidunt elementum sem non luctus
              </p>
            </div>
            <div className="list row">
              <TeamTeacher
                name="Trần Nghĩa"
                title="Founder &amp; Creative Front-End Developer"
              />
              <TeamTeacher
                name="Đặng thuyền vương"
                title="Co-Founder & Fullstack Developer"
              />
              <TeamTeacher
                name="đặng thuyền quân"
                title="Co-Founder & Backend Developer"
              />
              <TeamTeacher
                name="nguyễn đức huy"
                title="Co-Founder & Front-End Developer"
              />

              <TeamMember
                img="/img/thumb-member.jpg"
                text="H"
                name="Diệp anh thy"
                title="CFD1-Offline"
              />
              <TeamMember
                img="/img/thumb-member.jpg"
                text=""
                name="huỳnh tiến tài"
                title="CFD1-Offline"
              />
              <TeamMember
                img="/img/thumb-member.jpg"
                text=""
                name="Ngô thành long"
                title="CFD1-Offline"
              />
              <TeamMember
                img="/img/thumb-member.jpg"
                text=""
                name="trần anh tuấn"
                title="CFD1-Offline"
              />
              <TeamMember
                img="/img/thumb-member.jpg"
                text=""
                name="Ngô thành long"
                title="CFD1-Offline"
              />
              <TeamMember
                img="/img/thumb-member.jpg"
                text=""
                name="nguyễn thành tùng"
                title="CFD1-Offline"
              />
              <TeamMember
                img="/img/thumb-member.jpg"
                text=""
                name="phạm thành trung"
                title="CFD1-Offline"
              />
            </div>
          </div>
        </section>
      </main>
    );
}