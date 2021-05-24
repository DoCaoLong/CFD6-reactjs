import AuthApi, { tokenHandle } from "./AuthApi";
import { endpoint } from "./config";
const CourseApi = {
  list() {
    return fetch(`${endpoint}/elearning/v4/courses`, {
      method: "GET",
      // Get k cần headers
    }).then((res) => res.json());
  },
  async register(slug, data){
    let token = JSON.parse(localStorage.getItem("token"))?.accessToken;
    return fetch(`${endpoint}/elearning/v4/course-register/${slug}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(res => tokenHandle(res, () => {
    let token = JSON.parse(localStorage.getItem("token"))?.accessToken;
      return fetch(`${endpoint}/elearning/v4/profile/update`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json());
    }))
  },

  courseDetail(slug) {
    return fetch(`${endpoint}/elearning/v4/course/${slug}`, {
      method: "GET",
      // Get k cần headers
    }).then((res) => res.json());
  },
};
export default CourseApi;
