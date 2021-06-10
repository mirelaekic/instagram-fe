// import axios from "../../client";
import axios from "axios";
import backend from "../../client"
const INST_API = process.env.REACT_APP_INST_API
export const register = (credentials) => {
  return async (dispatch) =>  {
    try {
      dispatch({
        type:"SET_LOADING"
      })
      const res = await axios.post(INST_API+"/insta/users/register",credentials);
      const user = await res.data;
      if (user) {
        dispatch({
          type: "REGISTER_USER",
          payload: user,
        });
      }
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };
}
export const login = (credentials) => {
  return async (dispatch) =>  {
    try {
      dispatch({
        type:"SET_LOADING"
      })
      const res = await backend.post(INST_API+"/insta/users/login",credentials);
      const user = await res.data;
      if (user) {
        dispatch({
          type: "CURRENT_USER",
          payload: user,
        });
      }
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };
}
 
export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type:"SET_LOADING"
      })
      const res = await axios.post(INST_API+"/insta/users/logout",{withCredentials:true})
      if(res.data){
        dispatch({
          type:"LOG_OUT",
        })
      }
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  }
}
export const getMe = () => {
  return async (dispatch) => {
    try {
      const res = await backend.get(INST_API+"/insta/users/me");
      const user = await res.data;
      if (user) {
        dispatch({
          type: "CURRENT_USER",
          payload: user,
        });
      }
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };
};
export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const res = await backend.get(INST_API+"/insta/users");
      const user = await res.data;
      if (user) {
        dispatch({
          type: "GET_USERS",
          payload: user,
        });
      }
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };
};
