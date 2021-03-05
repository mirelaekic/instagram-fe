const likedReducer = (state = {},action) => {
    switch (action.type) {
        case "POST_LIKED":
            return{
                liked:action.payload
            }
            default:
                return state
    }
}
export default likedReducer