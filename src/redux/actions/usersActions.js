// import axios from "../../client";
import axios from "axios";
import backend from "../../client"
const INST_API = process.env.REACT_APP_INST_API
export const editProfile = (data,id) => {
  return async (dispatch) => {
    try {
      // dispatch({
      //   type:"SET_LOADING"
      // })
      const res = await backend.put(INST_API + "/insta/users/" + id,data)
      console.log(res.data[1][0],"the RESPONSE UPDATED USER")
      if(res.ok){
        const updatedUser = await res.data[1][0]
        dispatch({
          type:"CURRENT USER",
          payload:updatedUser
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
        window.location.replace("/")
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
      const res = await axios.get(INST_API+"/insta/users/logout",{withCredentials:true})
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
      dispatch({
        type:"SET_LOADING"
      })
      const res = await backend.get(INST_API+"/insta/users/me");
      console.log(res,"THE RESPONSE FROM /ME")
      const user = res.data;
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
      dispatch({
        type:"SET_LOADING"
      })
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
export const getUserById = (id) => {
  return async (dispatch) => {
    dispatch({
      type:"SET_LOADING"
    })
    try {
      const res = await axios.get(INST_API+"/insta/users/"+id,{withCredentials:true});
      const user = await res.data;
      if (user) {
        dispatch({
          type: "GET_USER",
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
