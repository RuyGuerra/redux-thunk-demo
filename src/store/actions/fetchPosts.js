import * as actionTypes from './actionTypes';
import axios from 'axios';

const API_BASE = 'https://www.reddit.com/r'


export const fetchPosts = (term) => {
  return async dispatch => {
    dispatch(fetchPostsRequest(term));
    const url = `${API_BASE}/${term}.json`;
    try {
      const response = await axios.get(url);
      const items = response.data.data.children;
      dispatch(fetchPostsSuccess(term, items));
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  }
}

export const fetchPostsRequest = (term) => {
  return {
    type: actionTypes.FETCH_POSTS_REQUEST,
    payload: { term }
  }
}

export const fetchPostsFailure = (error) => {
  return {
    type: actionTypes.FETCH_POSTS_FAILURE,
    payload: { error }
  }
}

export const fetchPostsSuccess = (term, posts) => {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    payload: {
      term,
      posts: posts.map(item => item.data)
    }
  }
}