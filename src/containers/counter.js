import React from 'react';
import { connect } from 'react-redux';

const Counter = props => <div id="counter">{props.counter}</div>;

// this function merges the resulting object into this components props object
const mapStateToProps = state => ({
  counter: state.counter.counter,
});

export default connect(mapStateToProps)(Counter);
