export const getComments = () => {
    return async (dispatch) => {
      try {
        const res = await fetch("http://localhost:9001/insta/comments", {
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
        const res = await fetch("http://localhost:9001/insta/comments/" + id, {
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