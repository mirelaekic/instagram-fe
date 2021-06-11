import backend from "../../client"
const INST_API = process.env.REACT_APP_INST_API

export const postComment = (text, postId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type:"COMMENTS_LOADING"
      })
      const res = await backend.post(
        INST_API+"/insta/comments/"+postId,{text:text});
        console.log(res,"THE RESPONSE AFTER POSTING")
      if (res) {

        const comment = res.data;
        console.log(comment,"THE COMMENT")
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
        if (res.ok) {
          dispatch({
            type: "DELETE_COMMENT",
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