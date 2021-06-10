  import axios from "axios";
  const INST_API = process.env.REACT_APP_INST_API
  const backend = axios.create({
    baseURL:INST_API,
    withCredentials: true,
  });

  backend.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      const originalRequest = error.config;
      if ((error.response.status === 401 || error.response.status === 403)  && !originalRequest._retry) {
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
            window.location.replace("/login");
            return Promise.reject(error);
          });
      }
    }
  );

  export default backend;

// // import axios from "axios";
// // import createAuthRefreshInterceptor from "axios-auth-refresh";

// // const API  = process.env.REACT_APP_INST_API;
// // const refreshAuthLogic = (failedRequest) =>
// //   axios
// //     .post(`${API}/insta/users/refresh/token`)
// //     .then((tokenRefreshResponse) => {
// //       return Promise.resolve();
// //     });
// // axios.defaults.withCredentials = true;
// //  //createAuthRefreshInterceptor(axios, refreshAuthLogic);

// // export default axios;