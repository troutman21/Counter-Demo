import React, { Component } from 'react';
import Count from './count';
import Increment from './increment';
import Decrement from './decrement';

class App extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.decrementCount = this.decrementCount.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
  }

  decrementCount() {
    this.setState({ count: (this.state.count -= 1) });
  }

  incrementCount() {
    this.setState({ count: (this.state.count += 1) });
  }

  render() {
    return (
      <div id="app">
        <Count count={this.state.count} />
        <hr />
        <div id="button-container">
          <Decrement decrementCount={this.decrementCount} />
          <Increment incrementCount={this.incrementCount} />
        </div>
      </div>
    );
  }
}

export default App;
