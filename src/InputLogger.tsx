import { useState, useEffect } from "react";
import styles from './InputLogger.module.css'

function InputLogger() {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log('Input value:', inputValue);
  });

  return (
    <div>
      <h2>Input Logger</h2>
      <input className={styles.textField} type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Type something..." 
      />
      <p>Current value: {inputValue}</p>
    </div>
  );
}

export default InputLogger;