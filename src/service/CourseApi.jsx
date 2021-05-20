import { endpoint } from "./config";
const CourseApi = {
  list() {
    return fetch(`${endpoint}/elearning/v4/courses`, {
      method: "GET",
      // Get k cần headers
    }).then((res) => res.json());
  },
  courseDetail(slug) {
    return fetch(`${endpoint}/elearning/v4/course/${slug}`, {
      method: "GET",
      // Get k cần headers
    }).then((res) => res.json());
  },
};
export default CourseApi;
