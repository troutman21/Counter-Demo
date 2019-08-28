import React, { Component } from 'react';
import Count from '../count';
import Increment from '../increment';
import Decrement from '../decrement';
import style from './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      countStatus: 'Neutral',
    };
    this.decrementCount = this.decrementCount.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
  }

  componentDidMount() {
    document.title = this.state.countStatus;
  }

  componentDidUpdate() {
    document.title = this.state.countStatus;
  }

  decrementCount() {
    this.setState({
      count: (this.state.count -= 1),
      countStatus: 'Going Down',
    });
  }

  incrementCount() {
    this.setState({
      count: (this.state.count += 1),
      countStatus: 'Going Up',
    });
  }

  render() {
    return (
      <div className={style.div}>
        <Count count={this.state.count} />
        <hr className={style.hr} />
        <div className={style.buttonContainer}>
          <Decrement decrementCount={this.decrementCount} />
          <Increment incrementCount={this.incrementCount} />
        </div>
      </div>
    );
  }
}

export default App;
