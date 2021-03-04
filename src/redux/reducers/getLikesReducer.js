export default function(state = {}, action){
    switch (action.type) {
        case "GET_LIKES":
            return {
                ...state,
                liked: action.payload
            }
            default:
                return state;
    }
}