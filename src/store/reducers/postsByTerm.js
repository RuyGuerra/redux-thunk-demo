import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  fetchFailure: false,
  error: '',
  items: []
};

const postsByTerm = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.FETCH_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true,
        fetchFailure: false,
        error: ''
      }

    case actionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        fetchFailure: true,
        error: action.payload.error,
        items: []
      }

    case actionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetchFailure: false,
        error: '',
        items: action.payload.posts
      }

    default:
      return state
  }

}

export default postsByTerm;