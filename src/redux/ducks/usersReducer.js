import axios from "axios";

/****** INITIAL STAT ******/
const initialState = {
  isLoading: false,
  claps: [],
  bookmarks: []
};

/****** ACTION TYPES ******/
const GET_USER_CLAPS = "GET_USER_CLAPS";
const GET_USER_BOOKMARKS = "GET_USER_BOOKMARKS";

/****** ACTION CREATORS ******/
export function getUserClaps(user_id) {
  return {
    type: GET_USER_CLAPS,
    payload: axios.get(`/api/users/claps/${user_id}`)
  };
}

export function getUserBookmarks(user_id) {
  return {
    type: GET_USER_BOOKMARKS,
    payload: axios.get(`/api/users/bookmarks/${user_id}`)
  };
}

/****** REDUCER ******/
export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    // GET USER CLAPS
    case "GET_USER_CLAPS_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_USER_CLAPS_FULFILLED":
      return {
        ...state,
        isLoading: false,
        claps: action.payload.data
      };
    case "GET_USER_CLAPS_REJECTED":
      return {
        ...state,
        isLoading: true,
        error: action.payload
      };

    // GET USER BOOKMARKS
    case "GET_USER_BOOKMARKS_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_USER_BOOKMARKS_FULFILLED":
      return {
        ...state,
        isLoading: false,
        bookmarks: action.payload.data
      };
    case "GET_USER_BOOKMARKS_REJECTED":
      return {
        ...state,
        isLoading: true,
        error: action.payload
      };

    // DEFAULT
    default:
      return state;
  }
}
