import Accordion from "./component/Accordion"

export default function Faq(){
    return (
      <main className="faqpage" id="main">
        <div className="container">
          <section>
            <h2 className="main-title">Câu hỏi thường gặp</h2>
            <div className="row">
              <div className="accordion_wrap col-md-8 offset-md-2 col-sm-12">
                <h3 className="accordion__title-main">Thông tin chung</h3>
                <Accordion
                  title="CFD là gì?"
                  content="I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                                offers
                                some tangible benefits over alternatives like VueJS for simple page interactions."
                />
                <Accordion
                  title="Thành viên sáng lập CFD gồm những ai?"
                  content="I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                                offers
                                some tangible benefits over alternatives like VueJS for simple page interactions."
                />
                <Accordion
                  title="Đăng ký khóa học như thế nào?"
                  content="I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                                offers
                                some tangible benefits over alternatives like VueJS for simple page interactions."
                />
              </div>
              <div className="accordion_wrap col-md-8 offset-md-2 col-sm-12">
                <h3 className="accordion__title-main">
                  Đăng ký, thanh toán và điểm thưởng
                </h3>
                <Accordion
                  title="Đăng ký, thanh toán và điểm thưởng"
                  content="I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                                offers
                                some tangible benefits over alternatives like VueJS for simple page interactions."
                />
                <Accordion
                  title="Thành viên sáng lập CFD gồm những ai?"
                  content="I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                                offers
                                some tangible benefits over alternatives like VueJS for simple page interactions."
                />
                <Accordion
                  title="Đăng ký khóa học như thế nào?"
                  content="I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                                offers
                                some tangible benefits over alternatives like VueJS for simple page interactions."
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    );
}