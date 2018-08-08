import axios from 'axios';

/****** INITIAL STATE ******/
const initialState = {
  isLoading: false,
  stories: []
}

/****** ACTION TYPES ******/
const GET_STORIES = 'GET_STORIES';

/****** ACTION CREATORS ******/
export function getStories() {
  return {
    type: GET_STORIES,
    payload: axios.get('/api/stories')
  }
}

/****** REDUCER ******/
export default function storiesReducer(state = initialState, action) {
  switch(action.type) {
    // GET STORIES
    case 'GET_STORIES_PENDING':
      return {
        ...state,
        isLoading: true
    };
    case 'GET_STORIES_FULFILLED':
      return {
        ...state,
        stories: action.payload.data
    };
    case 'GET_STORIES_REJECTED':
      return {
        ...state,
        error: action.payload
    };

    // DEFAULT
    default:
      return state;
  }
}