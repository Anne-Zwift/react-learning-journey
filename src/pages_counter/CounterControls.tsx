import { useCounterStore } from "../stores/counterStore";

function CounterControls() {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  console.log('CounterControls rendering...');

  return (
    <div>
      <button onClick={increment}>Increase (+1)</button>
      <button onClick={decrement}>Decrease (-1)</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterControls;