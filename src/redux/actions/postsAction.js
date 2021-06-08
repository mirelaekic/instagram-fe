const {INST_API} = process.env.REACT_APP_INST_API
export const getPost = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(INST_API+"/insta/posts", {
        method: "GET",
        credentials: "include",
      });
      if (res.ok) {
        const posts = await res.json();
        dispatch({
          type: "GET_POSTS_SUCCESSFUL",
          payload: posts,
        });
      }
    } catch (error) {
      dispatch({
        type: "GET_POSTS_ERROR",
        payload: error.message,
      });
    }
  };
};
export const getPostById = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(INST_API+"/insta/posts/" + id, {
        method: "GET",
        credentials: "include",
      });
      if (res.ok) {
        const posts = await res.json();
        dispatch({
          type: "GET_POST_BY_ID",
          payload: posts,
        });
      }
    } catch (error) {
      dispatch({
        type: "GET_POSTS_ERROR",
        payload: error.message,
      });
    }
  };
};
/*export const deletePost = (id) => {
    return async (dispatch) => {
      try {
        const res = await fetch("http://localhost:9001/insta/posts/" + id, {
          method: "DELETE",
          credentials: "include",
        });
        if (res.ok) {
          const posts = await res.json();
          dispatch({
            type: "DELETE_POST",
            payload: posts,
          });
        }
      } catch (error) {
        dispatch({
          type: "GET_POSTS_ERROR",
          payload: error.message,
        });
      }
    };
  };*/
export const uploadPost = (e, description) => {
  return async (dispatch) => {
    let formData = new FormData();
    formData.append("PostImage", e);
    try {
      const res = await fetch(INST_API+"/insta/posts", {
        method: "POST",
        headers: { Accept: "application/json" },
        credentials: "include",
        body: formData,
        description,
      });
      if (res.ok) {
        const posts = await res.json();
        dispatch({
          type: "POST_POST",
          payload: posts,
        });
        dispatch(getPost());
      }
    } catch (error) {
      dispatch({
        type: "GET_POSTS_ERROR",
        payload: error.message,
      });
    }
  };
};
export const likePost = (postId) => {
  return async (dispatch) => {
    try {
      const res = await fetch(INST_API+`/insta/like/${postId}`, {
        method: "POST",
        credentials: "include",
      });
      if (res.ok) {
        const liked = await res.json();
        console.log(liked, "LIKED");
        dispatch({
          type: "POST_LIKED",
          payload: liked,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getLikes = (userId, postId) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `${INST_API}/insta/like/${userId}/${postId}/posts/`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (res.ok) {
        const likes = await res.json();
        dispatch({
          type: "GET_LIKES",
          payload: likes,
        });
      }
    } catch (error) {
      dispatch({
        type: "GET_LIKES_ERROR",
        payload: error.message,
      });
    }
  };
};

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
        type: "COMMENT_ERROR",
        payload: error.message,
      });
    }
  };
};
