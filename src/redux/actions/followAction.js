const INST_API = process.env.REACT_APP_INST_API
export const followUser = (userId) => {
    return async (dispatch) => {
      try {
        const res = await fetch(
          INST_API + "/insta/follow/" + userId,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          }
        );
        if (res.ok) {
          const follow = await res.json();
          console.log(follow,"to follow")
          dispatch({
            type: "FOLLOW",
            payload: follow,
          });
        }
      } catch (error) {
        dispatch({
          type: "FOLLOW_ERROR",
          payload: error.message,
        });
      }
    };
  };