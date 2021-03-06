const initialState = {
    comments:[],
    loading:false,
    error: null,
    comment:{}
}

const commentReducer = (state = initialState,action) => {
    switch (action.type) {
        case "GET_COMMENTS":
            return {
                comments: action.payload,
                loading: false,
                error: null
            }
        case "COMMENTS_LOADING":
            return {
                ...state,
                loading: true
            }
        case "DELETE_COMMENT":
            return {
                ...state,
                loading:false
            }
        case "COMMENTS_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case "POST_COMMENT":
            return{
                comment: action.payload,
                loading: false,
                error: null
            }
            default:
                return state
    }
}
export default commentReducer