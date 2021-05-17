import { endpoint } from "./config";
const AuthApi = {
  login(data) {
    return fetch(`${endpoint}/elearning/v4/login`, {
      method: "POST",
      // dữ liệu gửi lên
      body: JSON.stringify(data),
      // headers để back end nhận biết truyền 1 json
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },
  // register: (){},
  update(data) {
    let token = JSON.parse(localStorage.getItem("login"))?.token?.accessToken;
    return fetch(`${endpoint}/elearning/v4/profile/update`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  },
};
export default AuthApi;
