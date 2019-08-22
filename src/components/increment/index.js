import React from 'react';
import styles from './style.css';

console.log(`styles: `, styles);

const Increment = props => (
  <button className={styles.increment} onClick={props.incrementCount}>
    +1
  </button>
);

export default Increment;
