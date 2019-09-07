import React, { createContext, Component } from 'react';

export const CounterContext = createContext();

class CounterContextProvider extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.decrementCount = this.decrementCount.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
  }

  decrementCount() {
    this.setState({
      count: (this.state.count -= 1),
    });
  }

  incrementCount() {
    this.setState({
      count: (this.state.count += 1),
    });
  }

  render() {
    return (
      <CounterContext.Provider
        value={{
          ...this.state,
          incrementCount: this.incrementCount,
          decrementCount: this.decrementCount,
        }}
      >
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}

export default CounterContextProvider;
