import * as actionTypes from './actionTypes';

export const selectTerm = (term) => {
  return {
    type: actionTypes.SELECT_TERM,
    payload: { term }
  }
}