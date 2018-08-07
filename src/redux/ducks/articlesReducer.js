import axios from 'axios';

/****** INITIAL STATE ******/
const initialState = {
  isLoading: false,
  articles: []
}

/****** ACTION TYPES ******/
const GET_ARTICLES = 'GET_ARTICLES';

/****** ACTION CREATORS ******/
export function getarticles() {
  return {
    type: GET_ARTICLES,
    payload: axios.get('/api/articles')
  }
}

/****** REDUCER ******/
export default function articlesReducer(state = initialState, action) {
  switch(action.type) {
    // GET ARTICLES
    case 'GET_ARTICLES_PENDING':
      return {
        ...state,
        isLoading: true
    };
    case 'GET_ARTICLES_FULFILLED':
      return {
        ...state,
        articles: action.payload.data
    };
    case 'GET_ARTICLES_REJECTED':
      return {
        ...state,
        error: action.payload
    };

    // DEFAULT
    default:
      return state;
  }
}