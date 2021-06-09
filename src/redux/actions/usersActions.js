// import axios from "../../client";
import axios from "axios";
import backend from "../../client"
const INST_API = process.env.REACT_APP_INST_API
export const login = (credentials) => {
  return async (dispatch) =>  {
    try {
      const res = await axios.post(INST_API+"/insta/users/login",credentials,{withCredentials:true});
      const user = await res.data;
      console.log(res.data,"LOGGING IN")
      if (user) {
        dispatch({
          type: "GET_ME",
          payload: user,
        });
      }
    } catch (error) {
      dispatch({
        type: "ME_ERROR",
        payload: error.message,
      });
    }
  };
}
export const getMe = () => {
  return async (dispatch) => {
    try {
      const res = await backend.get(INST_API+"/insta/users/me", {withCredentials:true});
      const user = await res.data;
      console.log(res.data,"THE CURRENT USER DATA")
      if (user) {
        dispatch({
          type: "GET_ME",
          payload: user,
        });
      }
    } catch (error) {
      dispatch({
        type: "ME_ERROR",
        payload: error.message,
      });
    }
  };
};
export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(INST_API+"/insta/users", {
        method: "GET",
        credentials: "include",
      });
      if (res.ok) {
        const users = await res.json();
        dispatch({
          type: "GET_ME",
          payload: users,
        });
      }
    } catch (error) {
      dispatch({
        type: "ME_ERROR",
        payload: error.message,
      });
    }
  };
};
