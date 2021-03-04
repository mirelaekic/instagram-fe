const initialState = {
    loading: false,
    postedPost:{},
    error: null,
    
}

const getPostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "POST_POST":
            return{
                postedPost: action.payload,
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
export default getPostsReducer