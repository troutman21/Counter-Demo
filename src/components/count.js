import React, { Component, useEffect } from 'react';
import { CounterContext } from '../contexts/CounterContexts';

class Count extends Component {
  render() {
    const value = this.context;
    return <div id="count">{value.count}</div>;
  }
}

Count.contextType = CounterContext;

export default Count;
