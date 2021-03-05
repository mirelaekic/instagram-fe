const initialState = {
    loading: false,
    follow: {},
    error: null,
}

const followUser = (state = initialState, action) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                follow: action.payload,
                loading: false,
                error: null
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: true
            }
        case "FOLLOW_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
export default followUser