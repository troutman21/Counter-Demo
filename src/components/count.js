import React, { Component } from 'react';
import { CounterContext } from '../contexts/CounterContexts';

console.log(CounterContext);
class Count extends Component {
  render() {
    const value = this.context;
    console.log('this.context', value);
    return <div id="count">{value.count}</div>;
  }
}

Count.contextType = CounterContext;

export default Count;
