import {
  FETCH_SMURFS,
  FETCH_FAILURE,
  ADD_SMURF,
  ADD_SMURF_FAILURE
} from '../actions';

const initialState = {
  smurfs: [],
  fetchSmurfs: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        fetchSmurfs: true
      };
    case FETCH_FAILURE:
      return {
        ...state,
        fetchSmurfs: false,
        error: action.payload
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload]
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
