const initialState = {
    loading: false,
    users: [],
    error: null,
    currentUser:{},
    registeredUser:{}
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CURRENT_USER":
            return {
                ...state,
                currentUser: action.payload,
                loading: false,
                error: null
            }
        case "LOG_OUT":
            return{
                currentUser: null,
                loading:false,
                error:null
            }
        case "GET_USERS":
            return {
                ...state,
                users: action.payload,
                loading: false,
                error: null
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: true
            }
        case "ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case "REGISTER_USER":
            return {
                ...state,
                loading:false,
                registeredUser:action.payload
            }
        default:
            return state
    }
}
export default usersReducer
