import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions/index';

import Form from './Form';
import Smurf from './Smurf';

import './App.css';

const App = props => {
  useEffect(() => {
    props.getSmurfs();
  }, []);

  return (
    <div className="App">
      <h1>Smurf Village</h1>

      <Form addSmurf={props.addSmurf} />

      {props.smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App);
