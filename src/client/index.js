import axios from "axios";

const backend = axios.create({
  baseURL:"http://localhost:9001",
  withCredentials: true,
});

backend.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    if ((error.response.status === 401 ||error.response.status === 403)  && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log("refreshing the token...");
      return backend
        .post("/insta/users/refresh/token")
        .then((res) => {
          if (res.status === 200) {
            console.log("token is refreshed");
            return backend(originalRequest);
          }
        })
        .catch(() => {
          window.location.replace("/insta/users/login");
          return Promise.reject(error);
        });
    }
  }
);

export default backend;