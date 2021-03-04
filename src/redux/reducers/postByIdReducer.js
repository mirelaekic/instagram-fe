const getPostById = (state = {},action) => {
    switch (action.type) {
        case "GET_POST_BY_ID":
            return{
                singlePost: action.payload,
                loading: false,
                error: null
            }
        case "POST_LIKED":
            return{
                liked:action.payload
            }
            default:
                return state
    }
}
export default getPostById