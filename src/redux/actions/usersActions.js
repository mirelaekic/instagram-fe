
export const getMe = () => {
    return async (dispatch) => {
      try {
        const res = await fetch("http://localhost:9001/insta/users/me", {
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
  /*
export const getAllUsers = () => {
    return async (dispatch) => {
        try {
            const res = await fetch("http://localhost:9001/insta/users", {
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
    }
}*/