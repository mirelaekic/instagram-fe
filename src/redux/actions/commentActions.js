const INST_API = process.env.REACT_APP_INST_API
export const postComment = (text, postId) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        INST_API + "/insta/comments/" + postId,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: text }),
          credentials: "include",
        }
      );
      if (res.ok) {
        const comment = await res.json();
        dispatch({
          type: "POST_COMMENT",
          payload: comment,
        });
      }
    } catch (error) {
      dispatch({
        type: "COMMENTS_ERROR",
        payload: error.message,
      });
    }
  };
};
export const getComments = () => {
    return async (dispatch) => {
      try {
        const res = await fetch(INST_API + "/insta/comments", {
          method: "GET",
          credentials: "include",
        });
        const comments = await res.json();
        if (comments) {
          dispatch({
            type: "GET_COMMENTS",
            payload: comments,
          });
        }
      } catch (error) {
        dispatch({
          type: "COMMENTS_ERROR",
          payload: error.message,
        });
      }
    };
  };
  export const deleteComment = (id) => {
    return async (dispatch) => {
      try {
        const res = await fetch(INST_API+"/insta/comments/" + id, {
          method: "DELETE",
          credentials: "include",
        }); 
        if (res.ok ) {
            const comments = await res.json();
          dispatch({
            type: "DELETE_COMMENT",
            payload: comments,
          });
          //dispatch(getComments())
        }
      } catch (error) {
        dispatch({
          type: "COMMENTS_ERROR",
          payload: error.message,
        });
      }
    };
  };