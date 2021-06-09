const initialState = {
    loading: false,
    users: [],
    error: null,
    currentUser:{}
}

const getUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ME":
            return {
                currentUser: action.payload,
                loading: false,
                error: null
            }
        case "GET_USERS":
            return {
                users: action.payload,
                loading: false,
                error: null
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: true
            }
        case "ME_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
export default getUsersReducer
