const initialState = {
    loading: false,
    comments: [],
    error: null,
}

const getCommentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COMMENTS":
            return {
                comments: action.payload,
                loading: false,
                error: null
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: true
            }
        case "DELETE_COMMENT":
            return {
                ...state,
                comments: [...state.comments.filter((c) => c !== action.payload)]
            }
        case "COMMENTS_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
export default getCommentsReducer