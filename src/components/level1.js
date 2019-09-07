import React, { useContext, useEffect } from 'react';
import Level2 from './level2';
import { CounterContext } from '../contexts/CounterContexts';

const Level1 = props => {
  const { countStatus } = useContext(CounterContext);
  useEffect(() => {
    document.title = countStatus;
  });
  return (
    <div className="level1">
      <h4>I'm the level1 component</h4>
      <Level2 />
    </div>
  );
};

export default Level1;
