export const getPost = () => {
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
export const getPostById = (id) => {
    return async dispatch => {
        try {
            const res = await fetch("http://localhost:9001/insta/posts/" + id, {
          method: "GET",
          credentials: "include",
        })
        if(res.ok){
            const posts = await res.json()
            dispatch({
                type:"GET_POST_BY_ID",
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
export const uploadPost = (e) => {
    return async dispatch => {
        let formData = new FormData()
        formData.append("PostImage",e)
        try {
        const res = await fetch("http://localhost:9001/insta/posts", {
        method: "POST",
        headers:{"Accept": "application/json", },
        credentials: "include",
        body: formData
        })
        if(res.ok){
            const posts = await res.json()
            dispatch({
                type:"POST_POST",
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
export const postComment = (text,postId) => {
    return async dispatch => {
        try {
            const res = await fetch("http://localhost:9001/insta/comments/" + postId, {
          method: "POST",
          headers:{"Content-Type":"application/json"},
        body: JSON.stringify({text:text}),
          credentials: "include",
        })
        if(res.ok){
            const comment = await res.json()
            dispatch({
                type:"POST_COMMENT",
                payload:comment
            })
        }
        } catch (error) {
            dispatch({
                type:"COMMENT_ERROR",
                payload:error.message
            })
        }
    }
}