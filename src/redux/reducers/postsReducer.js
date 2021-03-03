const initialState = {
    loading: false,
    posts: [],
    error: null
}

const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_POSTS_SUCCESSFUL":
            return {
                posts: action.payload,
                loading: false,
                error: null
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: true
            }
        case "GET_POSTS_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
export default PostsReducer