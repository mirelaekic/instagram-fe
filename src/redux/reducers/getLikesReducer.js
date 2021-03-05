const initialState = {
    loading: false,
    liked: {},
    error: null,
}

const getLikesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_LIKES":
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
        case "GET_LIKES_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
export default getLikesReducer
