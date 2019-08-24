import React from 'react';
import styles from './style.css';

const Increment = props => (
  <button className={styles.button} onClick={props.incrementCount}>
    +1
  </button>
);

export default Increment;
