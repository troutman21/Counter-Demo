import React from 'react';
import { connect } from 'react-redux';
import incrementActionCreator from '../actions/incrementActionCreator';

const Increment = props => (
  <button id="increment" onClick={props.incrementActionCreator}>
    +1
  </button>
);

const mapDispatchToProps = dispatch => ({
  incrementActionCreator: e => dispatch(incrementActionCreator(e)),
});

export default connect(
  null,
  mapDispatchToProps
)(Increment);
