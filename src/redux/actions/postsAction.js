import backend from "../../client";

const INST_API = process.env.REACT_APP_INST_API
export const getPost = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type:"SET_POSTS_LOADING"
      })
      const res = await backend.get(INST_API+"/insta/posts");
      console.log(res,"THE RESPONSE FROM GETTING THE POST")
      if (res) {
        const posts = await res.data;
        const byDate = posts.sort((a,b) => {
          return b.id - a.id
        })
        dispatch({
          type: "GET_POSTS_SUCCESSFUL",
          payload: byDate,
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
export const removePost = (id) => {
    return async (dispatch) => {
      console.log("TRYING TO DELETE POST ",id)
      try {
        const res = await backend.delete(INST_API+"/insta/posts/" + id);
        console.log(res,"the response after delete")
        if (res) {
          const posts = await res.data;
          console.log(posts,"DELETE POST")
          dispatch({
            type: "DELETE_POST"
          });
          dispatch(getPost())
        }
      } catch (error) {
        dispatch({
          type: "GET_POSTS_ERROR",
          payload: error.message,
        });
      }
    };
  };
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
          type: "UPLOAD_POST",
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
          type: "SINGLE_POST_LIKED",
          payload: liked,
        });
      }
    } catch (error) {
      dispatch({
        type:"GET_POSTS_ERROR",
        payload:error,
      })
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
          type: "ALL_POSTS_LIKED",
          payload: likes,
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

