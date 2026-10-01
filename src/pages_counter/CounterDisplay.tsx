import { useCounterStore } from "../stores/counterStore";

function CounterDisplay() {
  const count = useCounterStore((state) => state.count);

  console.log('CounterDisplay rendering...');

  return (
    <div>
      <h2>Counter value from Zustand</h2>
      <p>Counter value: {count}</p>
    </div>
  );
}

export default CounterDisplay;