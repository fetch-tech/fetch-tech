import axios from 'axios';

/****** INITIAL STAT ******/
const initialState = {
  isLoading: false,
  claps: []
}

/****** ACTION TYPES ******/
const GET_USER_CLAPS = 'GET_USR_CLAPS';

/****** ACTION CREATORS ******/
export function getUserClaps(user_id) {
  return {
    type: GET_USER_CLAPS,
    payload: axios.get(`/api/claps/${ user_id }`)
  }
}

/****** REDUCER ******/
export default function usersReducer(state = initialState, action) {
  switch(action.type) {
    // GET USER CLAPS
    case 'GET_USER_CLAPS_PENDING':
      return {
        ...state,
        isLoading: true
    };
    case 'GET_USER_CLAPS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        claps: action.payload.data
    };
    case 'GET_USER_CLAPS_REJECTED':
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