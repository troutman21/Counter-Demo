import React from 'react';
import { connect } from 'react-redux';
import decrementCounterActionCreator from '../actions/decrementActionCreator';

const Decrement = props => (
  <button id="decrement" onClick={props.decrementCounterActionCreator}>
    -1
  </button>
);

const mapDispatchToProps = dispatch => ({
  decrementCounterActionCreator: e =>
    dispatch(decrementCounterActionCreator(e)),
});

export default connect(
  null,
  mapDispatchToProps
)(Decrement);
