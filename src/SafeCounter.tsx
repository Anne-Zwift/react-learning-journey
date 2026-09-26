import { useState } from 'react';
import styles from './SafeCounter.module.css'

function SafeCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // Bonus: Add a button that tries to increment 5 times rapidly
  const handleIncrementFive = () => {
    handleIncrement();
    handleIncrement();
    handleIncrement();
    handleIncrement();
    handleIncrement();
    // Observe if this increments by 5 with the initial implementation vs refactored one
  };

  return (
    <div>
      <h2>Secure Counter</h2>
      <p>Value: {count}</p>
      <button className={styles.counterPlus} onClick={handleIncrement}>Increase (+ 1)</button>
      <button className={styles.counterMinus} onClick={handleDecrement}>Decrease (- 1)</button>
      <button className={styles.counterPlusFive} onClick={handleIncrementFive}>Increase (+ 5)</button>
    </div>
  );
}

export default SafeCounter;
