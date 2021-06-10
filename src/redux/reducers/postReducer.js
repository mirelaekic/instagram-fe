const initialState = {
  loading: false,
  postedPost: {},
  error: null,
  singlePost: {},
  posts: [],
  likedPost: {},
  likedPosts:[]
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SINLGE_POST_LIKED":
      return {
        ...state,
        likedPost: action.payload,
      };
    case "ALL_POSTS_LIKED":
      return{
        ...state,
        likedPosts: action.payload,
      }
    case "GET_POST_BY_ID":
      return {
        ...state,
        singlePost: action.payload,
        loading: false,
        error: null,
      };
    case "GET_POSTS_SUCCESSFUL":
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };
    case "UPLOAD_POST":
      return {
        ...state,
        postedPost: action.payload,
        loading: false,
        error: null,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_POSTS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default postReducer;
