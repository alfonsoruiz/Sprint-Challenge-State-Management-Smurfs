import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const getSmurfs = () => dispatch => {
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log('response', res);
      dispatch({ type: FETCH_SMURFS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
};

export const addSmurf = smurf => dispatch => {
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_SMURF, payload: smurf });
    })
    .catch(err => {
      dispatch({ type: ADD_SMURF_FAILURE, payload: err });
    });
};
