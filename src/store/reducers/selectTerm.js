import * as actionTypes from '../actions/actionTypes';

const initialState = {
  term: ''
};

const selectTerm = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.SELECT_TERM:
      return {
        ...state,
        term: action.payload.term
      }
      
    default:
      return state;
  }

}

export default selectTerm;
