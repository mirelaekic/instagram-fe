const {INST_API} = process.env.REACT_APP_INST_API
export const getMe = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(INST_API+"/insta/users/me", {
        method: "GET",
        credentials: "include",
      });
      const users = await res.json();
      if (users) {
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
