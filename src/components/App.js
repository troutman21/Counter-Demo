import React, { useReducer, useEffect } from 'react';
import Count from './count';
import Increment from './increment';
import Decrement from './decrement';
import countReducer from '../reducers/countReducer';
import changeCountActionCreator from '../action-creators/change-count-action-creator';

// constructor() {
//   super();
//   this.state = {
//     count: 0,
//     countStatus: 'Neutral',
//   };
//   this.decrementCount = this.decrementCount.bind(this);
//   this.incrementCount = this.incrementCount.bind(this);
// }

// componentDidMount() {
//   document.title = this.state.countStatus;
// }

// componentDidUpdate() {
//   document.title = this.state.countStatus;
// }

// decrementCount() {
//   this.setState({
//     count: (this.state.count -= 1),
//     countStatus: 'Going Down',
//   });
// }

// incrementCount() {
//   this.setState({
//     count: (this.state.count += 1),
//     countStatus: 'Going Up',
//   });
// }

const App = props => {
  const [state, dispatch] = useReducer(countReducer, {
    count: 0,
    counterStatus: 'Neutral 😐',
  });
  console.log(`state: `, state);
  console.log(`dispatch: `, dispatch);

  useEffect(() => {
    document.title = state.counterStatus;
  });

  return (
    <div id="app">
      <Count count={state.count} />
      <hr />
      <div id="button-container">
        <Decrement
          decrementCount={() => dispatch(changeCountActionCreator('decrement'))}
        />
        <Increment
          incrementCount={() => dispatch(changeCountActionCreator('increment'))}
        />
      </div>
    </div>
  );
};

export default App;
