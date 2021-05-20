import {Link} from 'react-router-dom'
export default function Page404(){

    return (
      <main class="notfound" id="main">
        <div class="container">
          <section>
            <h2 class="main-title">404</h2>
            <p>Không tìm thấy trang</p>
            <Link to="/" class="btn main round"
            >
              Trang chủ
            </Link>
          </section>
        </div>
      </main>
    );
}