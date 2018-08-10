import axios from "axios";

/****** INITIAL STAT ******/
const initialState = {
  isLoading: false,
  user: [],
  claps: [],
  bookmarks: [],
  comments: [],
  followerCount: [],
  followingCount: []
};

/****** ACTION TYPES ******/
const GET_USER = "GET_USER";
const GET_USER_CLAPS = "GET_USER_CLAPS";
const GET_USER_BOOKMARKS = "GET_USER_BOOKMARKS";
const GET_USER_COMMENTS = "GET_USER_COMMENTS";
const GET_USER_FOLLOWER_COUNT = "GET_USER_FOLLOWER_COUNT";
const GET_USER_FOLLOWING_COUNT = "GET_USER_FOLLOWING_COUNT";

/****** ACTION CREATORS ******/
export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get("/me")
  };
}

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

export function getUserComments(user_id) {
  return {
    type: GET_USER_COMMENTS,
    payload: axios.get(`/api/users/comments/${user_id}`)
  };
}

export function getUserFollowerCount(user_id) {
  return {
    type: GET_USER_FOLLOWER_COUNT,
    payload: axios.get(`/api/users/followers/${user_id}`)
  };
}

export function getUserFollowingCount(user_id) {
  return {
    type: GET_USER_FOLLOWING_COUNT,
    payload: axios.get(`/api/users/following/${user_id}`)
  };
}

/****** REDUCER ******/
export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    // GET CURRENT USER
    case "GET_USER_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_USER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        user: action.payload.data
      };
    case "GET_USER_REJECTED":
      return {
        ...state,
        isLoading: true,
        error: action.payload
      };

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

    // GET USER COMMENTS
    case "GET_USER_COMMENTS_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_USER_COMMENTS_FULFILLED":
      return {
        ...state,
        isLoading: false,
        comments: action.payload.data
      };
    case "GET_USER_COMMENTS_REJECTED":
      return {
        ...state,
        isLoading: true,
        error: action.payload
      };

    // GET USER FOLLOWER COUNT
    case "GET_USER_FOLLOWER_COUNT_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_USER_FOLLOWER_COUNT_FULFILLED":
      return {
        ...state,
        isLoading: false,
        followerCount: action.payload.data
      };
    case "GET_USER_FOLLOWER_COUNT_REJECTED":
      return {
        ...state,
        isLoading: true,
        error: action.payload
      };

    // GET USER FOLLOWING COUNT
    case "GET_USER_FOLLOWING_COUNT_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_USER_FOLLOWING_COUNT_FULFILLED":
      return {
        ...state,
        isLoading: false,
        followingCount: action.payload.data
      };
    case "GET_USER_FOLLOWING_COUNT_REJECTED":
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
