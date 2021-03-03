export const getProducts = () => {
    return async dispatch => {
        try {
            const res = await fetch("http://localhost:9001/insta/posts", {
          method: "GET",
          credentials: "include",
        })
        if(res.ok){
            const posts = await res.json()
            dispatch({
                type:"GET_POSTS_SUCCESSFUL",
                payload:posts
            })
        }
        } catch (error) {
            dispatch({
                type:"GET_POSTS_ERROR",
                payload:error.message
            })
        }
    }
}



const getPosts = () => ({
    type: "SET_LOADING"
});

const getPostsError = error => ({
    type: "GET_POSTS_ERROR",
    payload: {
        error
    }
});