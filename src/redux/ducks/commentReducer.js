import axios from "axios";
const initialState = {
  comments: [],
  isLoading: false
};

const GET_COMMENTS = "GET_COMMENTS";

export function getComments(commentId) {
  return {
    type: GET_COMMENTS,
    payload: axios.get(`/api/commentArticles/comment/comment/${commentId}`)
  };
}
export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COMMENTS_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_COMMENTS_REJECTED":
      return {
        ...state,
        isLoading: true,
        error: action.payload
      };
    case "GET_COMMENTS_FULFILLED":
      return {
        ...state,
        isLoading: false,
        comments: action.payload.data
      };

    default:
      return state;
  }
}
